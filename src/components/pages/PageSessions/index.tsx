import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { Layout } from 'src/components/commons'
import { SessionCard } from 'src/components/molecules'
import { useSessionize } from 'src/modules/sessionize/hooks'
import { Colors } from 'src/styles/color'

export const PageSessions: FC = () => {
  const { data, isLoading, getRoomName, getSessionNumber, getSpeaker, getSessionLevel, getSessionType } =
    useSessionize()

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
          padding: { xs: '32px 16px', md: '80px 20px' }
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
            {isLoading ? (
              <CircularProgress />
            ) : (
              data?.sessions.map(session => (
                <Grid item xs={12} md={6} key={session.id}>
                  <SessionCard
                    title={session.title}
                    roomName={getRoomName(session.roomId)}
                    sessionId={getSessionNumber(session)}
                    description={session.description}
                    speaker={getSpeaker(session.speakers[0])}
                    sessionLevel={getSessionLevel(session)}
                    sessionType={getSessionType(session)}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}
