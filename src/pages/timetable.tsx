import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import { Layout } from 'src/components/commons'
import { PlenumCard, PlenumCardProps, TrackCard, TrackCardProps } from 'src/components/molecules'
import { fetchSessionize } from 'src/modules/sessionize/fetch-sessionize'
import { getSpeaker } from 'src/modules/sessionize/utils'
import { getSessionType } from 'src/modules/sessionize/utils'
import { getRoom, getSessionId } from 'src/modules/sessionize/utils'
import { TimetableRoomHeader } from 'src/components/molecules/TimetableRoomHeader'

type PlenumSessionInfo = PlenumCardProps
type RoomSessionInfo = TrackCardProps

type TimetableSession = {
  startsAt: string
  plenum: PlenumSessionInfo | null
  roomA: RoomSessionInfo | null
  roomB: RoomSessionInfo | null
}

type Props = {
  timeTableSessions: TimetableSession[]
}

// Sessions not belong to any speakers, like opening, breaks, and closing.
const plenumSessions: TimetableSession[] = [
  { startsAt: '2023-06-02T10:00:00', plenum: { title: 'Opening', minutes: 10 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T10:50:00', plenum: { title: 'Break', minutes: 10 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T12:00:00', plenum: { title: 'Lunch break', minutes: 70 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T13:50:00', plenum: { title: 'Break', minutes: 10 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T15:00:00', plenum: { title: 'Break', minutes: 20 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T16:20:00', plenum: { title: 'Break', minutes: 10 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T17:30:00', plenum: { title: 'Break', minutes: 15 }, roomA: null, roomB: null },
  { startsAt: '2023-06-02T18:25:00', plenum: { title: 'Closing', minutes: 20 }, roomA: null, roomB: null }
]

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { sessions, rooms, categories, speakers } = await fetchSessionize()

  // Format all sessions for using timetable.
  // Divide sessions between room A and B.
  const roomSessions: TimetableSession[] = sessions.map(
    ({ roomId, title, startsAt, speakers: speakerIds, categoryItems, questionAnswers }) => {
      const { name: roomName } = getRoom(rooms, roomId)
      const sessionId = getSessionId(questionAnswers)
      const sessionType = getSessionType(categories, categoryItems)
      const { fullName: speakerName, profilePicture } = getSpeaker(speakers, speakerIds[0])

      const sessionInfo: RoomSessionInfo = {
        roomName,
        sessionId,
        title,
        sessionType,
        speakerName,
        profilePicture
      }

      switch (roomName) {
        case 'Room A':
          return {
            startsAt,
            plenum: null,
            roomA: sessionInfo,
            roomB: null
          }
        case 'Room B':
          return {
            startsAt,
            plenum: null,
            roomA: null,
            roomB: sessionInfo
          }
        default:
          throw new Error(`Invalid room: ${roomName}`)
      }
    }
  )

  // Combine room A's and B's sessions with the same startsAt.
  // Add plenumSessions as initialValue of reduce().
  const timeTableSessions: TimetableSession[] = roomSessions.reduce((accumulator, currentSession) => {
    const { startsAt, roomA, roomB } = currentSession
    const existingSession: TimetableSession | undefined = accumulator.find(s => s.startsAt === startsAt)

    if (existingSession) {
      if (roomA) {
        existingSession.roomA = roomA
      } else if (roomB) {
        existingSession.roomB = roomB
      }
    } else {
      accumulator.push(currentSession)
    }

    return accumulator
  }, plenumSessions)

  // Sort all sessions by comparing startsAt time in order of earliest to latest.
  const sortedTimeTableSessions = timeTableSessions.sort((a, b) => {
    if (dayjs(a.startsAt).isBefore(dayjs(b.startsAt))) {
      return -1
    } else if (dayjs(a.startsAt).isAfter(dayjs(b.startsAt))) {
      return 1
    }
    return 0
  })

  console.log(sortedTimeTableSessions)

  return { props: { timeTableSessions: sortedTimeTableSessions } }
}

const Index: NextPage<Props> = ({ timeTableSessions }) => {
  return (
    <Layout>
      <Box>
        <Typography variant="h2" sx={{ textAlign: 'center', paddingTop: { xs: '64px', sm: '128px' } }}>
          2023.06.02(Fri)
        </Typography>
        <Box
          sx={{
            maxWidth: '1024px',
            mx: 'auto',
            px: '16px',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            rowGap: '4px',
            columnGap: { xs: '8px', sm: '24px' },
            alignItems: 'start'
          }}
        >
          {/* Stick table header to half height of header when scrolled, z-index is header's + 100. */}
          <Box sx={{ gridColumn: '2 / 3', position: 'sticky', top: '64px', zIndex: 1200 }}>
            <TimetableRoomHeader roomName="Room A" />
          </Box>
          {/* Stick table header to half height of header when scrolled, z-index is header's + 100. */}
          <Box sx={{ gridColumn: '3 / 4', position: 'sticky', top: '64px', zIndex: 1200 }}>
            <TimetableRoomHeader roomName="Room B" />
          </Box>
          {timeTableSessions.map(({ startsAt, plenum, roomA, roomB }) => {
            return (
              <Fragment key={startsAt}>
                <Box sx={{ gridColumn: '1 / 2' }}>
                  <Typography sx={{ textAlign: 'right' }}>{dayjs(startsAt).format('HH:mm')}</Typography>
                </Box>
                {plenum && (
                  <Box sx={{ gridColumn: '2 / 4' }}>
                    <PlenumCard title={plenum.title} minutes={plenum.minutes} />
                  </Box>
                )}
                {roomA && (
                  <Box sx={{ gridColumn: '2 / 3' }}>
                    <TrackCard
                      roomName={roomA.roomName}
                      sessionId={roomA.sessionId}
                      title={roomA.title}
                      sessionType={roomA.sessionType}
                      speakerName={roomA.speakerName}
                      profilePicture={roomA.profilePicture}
                    />
                  </Box>
                )}
                {roomB && (
                  <Box sx={{ gridColumn: '3 / 4' }}>
                    <TrackCard
                      roomName={roomB.roomName}
                      sessionId={roomB.sessionId}
                      title={roomB.title}
                      sessionType={roomB.sessionType}
                      speakerName={roomB.speakerName}
                      profilePicture={roomB.profilePicture}
                    />
                  </Box>
                )}
              </Fragment>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}

export default Index
