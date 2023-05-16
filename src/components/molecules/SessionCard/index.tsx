import { Box, Typography } from '@mui/material'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import { Colors } from 'src/styles/color'
import { FC } from 'react'
import { SpeakerBlock } from 'src/components/molecules'
import { useSize } from 'src/modules/hooks'

type Props = {
  title: string
  room: 'a' | 'b'
  sessionId: string
  description: string
  speaker: {
    fullName: string
    tagLine: string
    profilePicture: string
  }
  sessionLevel: string
  sessionType: string
}

export const SessionCard: FC<Props> = ({ title, room, sessionId, description, speaker, sessionLevel, sessionType }) => {
  const { isPCOrOver } = useSize()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: isPCOrOver ? '24px' : '16px',
        gap: isPCOrOver ? '12px' : '8px',
        borderRadius: '18px',
        boxShadow: '0px 3px 8px rgba(144, 131,  147, 0.15)',
        backgroundColor: Colors.background.primary
      }}
    >
      <Typography
        variant="h5"
        sx={{
          display: '-webkit-box',
          alignItems: 'center',
          color: Colors.text.primary,
          wordWrap: 'break-word',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          overflow: 'hidden'
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
        <SessionLabel isRoomNameDisplayed room={room} sessionId={sessionId} />
        <Typography
          variant="body2"
          sx={{
            color: Colors.text.primary,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 5,
            overflow: 'hidden'
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          gap: '24px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          alignSelf: 'stretch'
        }}
      >
        <SpeakerBlock name={speaker.fullName} tagLine={speaker.tagLine} iconUrl={speaker.profilePicture} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '4px',
            marginLeft: 'auto'
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'right',
              color: Colors.text.secondary
            }}
          >
            Level: {sessionLevel}
          </Typography>
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
  )
}
