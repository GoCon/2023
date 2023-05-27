import { Box, Link as MuiLink, Typography } from '@mui/material'
import { type NextPage, type GetStaticProps, type GetStaticPaths, InferGetStaticPropsType } from 'next'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import { SpeakerIcon } from 'src/components/atoms/SpeakerIcon'
import { Layout } from 'src/components/commons'
import { Colors } from 'src/styles/color'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import EventIcon from '@mui/icons-material/Event'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { replaceUrlWithLink } from 'src/modules/util/text'
import { fetchSessionize } from 'src/modules/sessionize/fetch-sessionize'
import {
  getGoogleCalendarEventCreationLink,
  getRoom,
  getSession,
  getSessionLevel,
  getSessionType,
  getSpeaker,
  getTwitterUserName
} from 'src/modules/sessionize/utils'

type Props = {
  title: string
  roomName: 'Room A' | 'Room B'
  sessionId: string
  description: string
  sessionType: string | null
  sessionLevel: string | null
  googleCalendarEventCreationLink: string
  speaker: {
    fullName: string
    profilePicture: string
    bio: string
    tagLine: string
    twitterUserName: string | null
  }
}

const allSessionPaths = [
  { params: { id: 'A1-SP' } },
  { params: { id: 'A2-SP' } },
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
  const { sessions, rooms, categories, speakers } = await fetchSessionize()

  const sessionId = params?.id
  if (!sessionId || typeof sessionId !== 'string') {
    throw new Error(`Invalid sessionId: ${sessionId}`)
  }

  const {
    title,
    description,
    roomId,
    categoryItems,
    speakers: speakerIds,
    startsAt,
    endsAt
  } = getSession(sessions, sessionId)

  const { name: roomName } = getRoom(rooms, roomId)
  const sessionLevel = getSessionLevel(categories, categoryItems)
  const sessionType = getSessionType(categories, categoryItems)
  const googleCalendarEventCreationLink = getGoogleCalendarEventCreationLink(startsAt, endsAt, title, description)
  const { fullName, profilePicture, bio, tagLine, links } = getSpeaker(speakers, speakerIds[0])
  const twitterUserName = getTwitterUserName(links)

  return {
    props: {
      title,
      roomName,
      sessionId,
      description,
      sessionLevel,
      sessionType,
      googleCalendarEventCreationLink,
      speaker: { fullName, profilePicture, bio, tagLine, twitterUserName }
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
  googleCalendarEventCreationLink,
  speaker: { fullName, profilePicture, bio, tagLine, twitterUserName }
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
        <NextLink href="/sessions">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: '40px',
              color: Colors.text.secondary,
              ':hover': { color: Colors.text.primary, textDecoration: 'underline' }
            }}
          >
            <ArrowBackIosNewIcon />
            <Typography variant="body2" sx={{ color: Colors.text.secondary, ':hover': { color: Colors.text.primary } }}>
              {t('back_to_sessions')}
            </Typography>
          </Box>
        </NextLink>
        <Typography variant="h2">{title}</Typography>

        {/* Session's info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb: '24px' }}>
          <SessionLabel roomName={roomName} sessionId={sessionId} isRoomNameDisplayed />
          <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
            {replaceUrlWithLink(description, { keepFullLength: true })}
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
              href={googleCalendarEventCreationLink}
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
            {twitterUserName && (
              <MuiLink
                href={`https://twitter.com/${twitterUserName}`}
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
          <Typography variant="body2">{replaceUrlWithLink(bio, { keepFullLength: true })}</Typography>
        </Box>
      </Box>

      {/* TODO: Add video and slide after the conference. */}
    </Layout>
  )
}
export default Page
