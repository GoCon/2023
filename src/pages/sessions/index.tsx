import { GetStaticProps, NextPage } from 'next'
import { fetchSessionize } from 'src/modules/sessionize/fetch-sessionize'
import {
  formatSpeakerName,
  getRoom,
  getSessionId,
  getSessionLevel,
  getSessionType,
  getSpeaker
} from 'src/modules/sessionize/utils'
import { Box, Grid, Typography } from '@mui/material'
import { Layout } from 'src/components/commons'
import { SessionCard } from 'src/components/molecules'
import { Colors } from 'src/styles/color'
import { SessionAndSpeakerForSessionsList } from 'src/types'

type Props = {
  sessionsAndSpeakers: SessionAndSpeakerForSessionsList[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { sessions, rooms, categories, speakers } = await fetchSessionize()

  const sessionsList = sessions.map(
    ({ id, title, description, roomId, speakers: speakerIds, questionAnswers, categoryItems }) => {
      const { name: roomName } = getRoom(rooms, roomId)
      const sessionId = getSessionId(questionAnswers)
      const { firstName, lastName, tagLine, profilePicture } = getSpeaker(speakers, speakerIds[0])
      const fullName = formatSpeakerName(firstName, lastName)
      const sessionLevel = getSessionLevel(categories, categoryItems)
      const sessionType = getSessionType(categories, categoryItems)

      return {
        id,
        title,
        roomName,
        sessionId,
        description,
        sessionLevel,
        sessionType,
        speaker: {
          fullName,
          tagLine,
          profilePicture
        }
      }
    }
  )

  return { props: { sessionsAndSpeakers: sessionsList } }
}

const Index: NextPage<Props> = ({ sessionsAndSpeakers }) => {
  return (
    <Layout>
      <Typography
        variant="h2"
        align="center"
        sx={{
          marginTop: { xs: '80px', sm: '160px' },
          marginBottom: { xs: '32px', sm: '72px' }
        }}
      >
        Sessions & Speakers
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: Colors.background.secondary,
          padding: { xs: '32px 16px', md: '80px 20px' },
          minHeight: '100vh'
        }}
      >
        <Box maxWidth={'1024px'} width={'100%'}>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            mx={'auto'}
            columns={12}
            justifyContent="center"
            alignItems={'stretch'}
          >
            {sessionsAndSpeakers.map(
              ({ title, roomName, sessionId, description, speaker, sessionLevel, sessionType }) => (
                <Grid item xs={12} md={6} key={sessionId} sx={{ display: 'flex' }}>
                  <SessionCard
                    title={title}
                    roomName={roomName}
                    sessionId={sessionId}
                    description={description}
                    speaker={speaker}
                    sessionLevel={sessionLevel}
                    sessionType={sessionType}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}

export default Index
