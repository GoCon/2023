import { Box, Link as MuiLink, Typography } from '@mui/material'
import { type NextPage, type GetStaticProps, type GetStaticPaths, InferGetStaticPropsType } from 'next'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import { SpeakerIcon } from 'src/components/atoms/SpeakerIcon'
import { Layout } from 'src/components/commons'
import { Colors } from 'src/styles/color'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import EventIcon from '@mui/icons-material/Event'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { replaceUrlWithLink } from 'src/modules/util/text'
import { fetchSessionize } from 'src/modules/sessionize/fetch-sessionize'
import {
  formatSpeakerName,
  getGoogleCalendarEventCreationLink,
  getRoom,
  getSession,
  getSessionLevel,
  getSessionType,
  getSpeaker,
  getTwitterUserName
} from 'src/modules/sessionize/utils'
import Head from 'next/head'

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
  const { firstName, lastName, profilePicture, bio, tagLine, links } = getSpeaker(speakers, speakerIds[0])
  const fullName = formatSpeakerName(firstName, lastName)
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
      <Head>
        <title>{`${title} | Go Conference 2023`}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Box
        sx={{
          my: { xs: '64px', sm: '128px' },
          maxWidth: '1024px',
          mx: 'auto',
          backgroundColor: Colors.background.primary,
          borderRadius: '20px',
          p: { xs: '16px', sm: '24px 32px' }
        }}
      >
        <Typography variant="h2">{title}</Typography>

        {/* Session's info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mb: '32px' }}>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <SessionLabel roomName={roomName} sessionId={sessionId} isRoomNameDisplayed />
          </Box>
          <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
            {replaceUrlWithLink(description, { keepFullLength: true })}
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
            {sessionLevel && (
              <Typography
                variant="subtitle1"
                sx={{ color: Colors.text.secondary }}
              >{`Level: ${sessionLevel} /`}</Typography>
            )}
            <Typography variant="subtitle1" sx={{ color: Colors.text.secondary }}>
              {sessionType}
            </Typography>
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
        <Box
          sx={{
            backgroundColor: Colors.background.secondary,
            borderRadius: '12px',
            p: { xs: '16px', sm: '32px' },
            mb: '40px'
          }}
        >
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
          <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
            {replaceUrlWithLink(bio, { keepFullLength: true })}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NextLink href="/sessions">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: Colors.text.secondary,
                ':hover': { color: Colors.text.primary, textDecoration: 'underline' }
              }}
            >
              <ArrowBackIosNewIcon />
              <Typography
                variant="body2"
                sx={{ color: Colors.text.secondary, ':hover': { color: Colors.text.primary } }}
              >
                All Sessions
              </Typography>
            </Box>
          </NextLink>
          <NextLink href="/timetable">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: Colors.text.secondary,
                ':hover': { color: Colors.text.primary, textDecoration: 'underline' }
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: Colors.text.secondary, ':hover': { color: Colors.text.primary } }}
              >
                Timetable
              </Typography>
              <ArrowForwardIosIcon />
            </Box>
          </NextLink>
        </Box>
      </Box>

      {/* TODO: Add video and slide after the conference. */}
    </Layout>
  )
}
export default Page
