import { Box, Link as MuiLink, Typography } from '@mui/material'
import { type NextPage, type GetStaticProps, type GetStaticPaths, InferGetStaticPropsType } from 'next'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import { SpeakerIcon } from 'src/components/atoms/SpeakerIcon'
import { Layout } from 'src/components/commons'
import {
  CATEGORY_SESSION_LEVEL,
  CATEGORY_SESSION_TYPE,
  QUESTION_SESSION_NUMBER,
  sessionizeViewAllSchema
} from 'src/modules/sessionize/schema'
import { Colors } from 'src/styles/color'
import { Event as EventIcon, Twitter as TwitterIcon } from '@mui/icons-material'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

type Props = {
  title: string
  roomName: 'Room A' | 'Room B'
  sessionId: string
  description: string
  sessionType: string | null
  sessionLevel: string | null
  addEventToCalendarLink: string
  speaker: {
    fullName: string
    profilePicture: string
    bio: string
    tagLine: string
    twitterLink: string | null
  }
}

const allSessionPaths = [
  { params: { id: 'A3-L' } },
  { params: { id: 'B3-L' } },
  { params: { id: 'A4-S' } },
  { params: { id: 'B4-S' } },
  { params: { id: 'A5-SP' } },
  { params: { id: 'A6-SP' } },
  { params: { id: 'A7-L' } },
  { params: { id: 'B7-L' } },
  { params: { id: 'A8-S' } },
  { params: { id: 'B8-S' } },
  { params: { id: 'A9-S' } },
  { params: { id: 'B9-S' } },
  { params: { id: 'A10-S' } },
  { params: { id: 'B10-S' } },
  { params: { id: 'A11-S' } },
  { params: { id: 'B11-S' } },
  { params: { id: 'A12-S' } },
  { params: { id: 'B12-S' } },
  { params: { id: 'A13-S' } },
  { params: { id: 'B13-S' } },
  { params: { id: 'A14-S' } },
  { params: { id: 'B14-S' } },
  { params: { id: 'LT1' } },
  { params: { id: 'LT2' } },
  { params: { id: 'LT3' } },
  { params: { id: 'LT4' } },
  { params: { id: 'LT5' } },
  { params: { id: 'LT6' } },
  { params: { id: 'LT7' } },
  { params: { id: 'LT8' } }
]

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allSessionPaths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const response = await fetch('https://sessionize.com/api/v2/3qcdixg4/view/All')
  const parsedResult = await sessionizeViewAllSchema.safeParseAsync(await response.json())

  if (!parsedResult.success) {
    throw new Error(`Failed to parse: ${parsedResult.error}`)
  }

  const { sessions, rooms, categories, speakers } = parsedResult.data

  const matchedSession = sessions.find(
    ({ questionAnswers }) =>
      questionAnswers.find(({ questionId }) => questionId === QUESTION_SESSION_NUMBER)?.answerValue === params?.id
  )

  if (!matchedSession) {
    throw new Error(`No sessions found.`)
  }

  const { title, description, roomId, categoryItems, speakers: speakerIds, startsAt, endsAt } = matchedSession

  const sessionId = params?.id
  if (!sessionId || typeof sessionId !== 'string') {
    throw new Error(`Invalid sessionId: ${sessionId}`)
  }

  const room = rooms.find(({ id }) => id === roomId)

  if (!room) {
    throw new Error(`Invalid roomId: ${roomId}`)
  }

  const roomName = room.name

  const sessionLevels = categories.find(({ id }) => id === CATEGORY_SESSION_LEVEL)?.items
  const sessionLevel = sessionLevels?.find(({ id }) => id === categoryItems[1])?.name ?? null

  const sessionTypes = categories.find(({ id }) => id === CATEGORY_SESSION_TYPE)?.items
  const sessionType = sessionTypes?.find(({ id }) => id === categoryItems[0])?.name ?? null

  const calendarDateFormat = 'YYYYMMDD[T]HHmmss'
  const calendarDatesParam = `${dayjs(startsAt).format(calendarDateFormat)}/${dayjs(endsAt).format(calendarDateFormat)}`
  const addEventToCalendarLink = `http://www.google.com/calendar/event?action=TEMPLATE&text=${title}&details=${description}&dates=${calendarDatesParam}`

  const speaker = speakers.find(({ id }) => id === speakerIds[0])

  if (!speaker) {
    throw new Error(`Invalid speakerId: ${speakerIds[0]}`)
  }

  const { fullName, profilePicture, bio, tagLine, links } = speaker
  const twitterLink = links[0]?.url ?? null

  return {
    props: {
      title,
      roomName,
      sessionId,
      description,
      sessionLevel,
      sessionType,
      addEventToCalendarLink,
      speaker: { fullName, profilePicture, bio, tagLine, twitterLink }
    }
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  title,
  roomName,
  sessionId,
  description,
  sessionLevel,
  sessionType,
  addEventToCalendarLink,
  speaker: { fullName, profilePicture, bio, tagLine, twitterLink }
}) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Box
        sx={{
          my: '128px',
          maxWidth: '1024px',
          mx: 'auto',
          backgroundColor: Colors.background.primary,
          borderRadius: '20px',
          p: { xs: '16px', sm: '24px 32px' }
        }}
      >
        <Typography variant="h2">{title}</Typography>

        {/* Session's info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb: '24px' }}>
          <SessionLabel roomName={roomName} sessionId={sessionId} isRoomNameDisplayed />
          <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              {sessionLevel && (
                <Typography
                  variant="subtitle1"
                  sx={{ color: Colors.text.secondary }}
                >{`Level: ${sessionLevel} / `}</Typography>
              )}
              <Typography variant="subtitle1" sx={{ color: Colors.text.secondary }}>
                {sessionType}
              </Typography>
            </Box>
            <MuiLink
              href={addEventToCalendarLink}
              target="_blank"
              variant="body2"
              sx={{
                display: 'flex',
                gap: '4px',
                ml: 'auto',
                alignItems: 'center',
                color: Colors.text.primary,
                textDecoration: 'none',
                ':hover': { color: Colors.text.secondary, textDecoration: 'underline' }
              }}
            >
              <EventIcon />
              {t('add_to_calendar')}
            </MuiLink>
          </Box>
        </Box>

        {/* Speaker's info */}
        <Box sx={{ backgroundColor: Colors.background.secondary, borderRadius: '12px', p: { xs: '16px', sm: '32px' } }}>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', mb: '8px' }}>
            <SpeakerIcon iconUrl={profilePicture} name={fullName} size="60px" />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="h4">{fullName}</Typography>
              <Typography variant="subtitle1" sx={{ color: Colors.text.secondary }}>
                {tagLine}
              </Typography>
            </Box>
            {twitterLink && (
              <MuiLink
                href={twitterLink}
                target="_blank"
                sx={{
                  color: Colors.text.primary,
                  ml: 'auto',
                  alignSelf: 'flex-start',
                  ':hover': { color: Colors.text.secondary }
                }}
              >
                <TwitterIcon />
              </MuiLink>
            )}
          </Box>
          <Typography variant="body2">{bio}</Typography>
        </Box>
      </Box>

      {/* TODO: Add video and slide after the conference. */}
    </Layout>
  )
}
export default Page
