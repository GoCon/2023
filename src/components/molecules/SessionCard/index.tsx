import { Box, Typography } from '@mui/material'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import { Colors } from 'src/styles/color'
import { FC } from 'react'
import { SpeakerBlock } from 'src/components/molecules'
import { useSize } from 'src/modules/hooks'
import Link from 'next/link'
import { SessionAndSpeakerForSessionsList } from 'src/types'

type Props = SessionAndSpeakerForSessionsList

export const SessionCard: FC<Props> = ({
  title,
  roomName,
  sessionId,
  description,
  speaker,
  sessionLevel,
  sessionType
}) => {
  const { isPCOrOver } = useSize()

  return (
    <Link href={`/sessions/${sessionId}`} style={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: isPCOrOver ? '24px' : '16px',
          gap: isPCOrOver ? '12px' : '8px',
          borderRadius: '18px',
          boxShadow: '0px 3px 8px rgba(144, 131,  147, 0.15)',
          backgroundColor: Colors.background.primary,
          ':hover': {
            opacity: '0.6'
          }
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            wordBreak: 'break-word'
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '8px'
          }}
        >
          <SessionLabel isRoomNameDisplayed roomName={roomName} sessionId={sessionId} />
          <Typography
            variant="body2"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 5,
              overflow: 'hidden',
              wordBreak: 'break-word',
              flexGrow: 1
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            gap: '24px',
            display: 'flex',
            alignItems: 'flex-end',
            alignSelf: 'stretch',
            marginTop: 'auto'
          }}
        >
          <SpeakerBlock name={speaker.fullName} tagLine={speaker.tagLine} profilePicture={speaker.profilePicture} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '4px',
              marginLeft: 'auto'
            }}
          >
            {sessionLevel && (
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'right',
                  color: Colors.text.secondary
                }}
              >
                Level: {sessionLevel}
              </Typography>
            )}
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: 'right',
                color: Colors.text.secondary
              }}
            >
              {sessionType}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
