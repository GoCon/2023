import { Box, Typography } from '@mui/material'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import { Colors } from 'src/styles/color'
import { FC } from 'react'
import { SpeakerBlock } from 'src/components/molecules'
import { useSize } from 'src/modules/hooks'

type Props = {
  title: string
  room: string
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
        width: isPCOrOver ? '500px' : '343px',
        borderRadius: '18px',
        boxShadow: '0px 3px 8px rgba(144, 131,  147, 0.15)',
        backgroundColor: Colors.background.primary
      }}
    >
      <Typography
        sx={{
          display: '-webkit-box',
          width: '100%',
          fontFamily: 'Helvetica',
          fontWeight: 400,
          fontSize: isPCOrOver ? '24px' : '17px',
          lineHeight: '120%',
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
          gap: '8px',
          width: '100%'
        }}
      >
        <SessionLabel text={`${room} : ${sessionId}`} color={Colors.background.primary_pink} />
        <Typography
          sx={{
            display: '-webkit-box',
            width: '100%',
            fontFamily: 'Helvetica',
            fontWeight: 400,
            fontSize: isPCOrOver ? '16px' : '14px',
            lineHeight: '150%',
            color: Colors.text.primary,
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
          width: '100%',
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
            // width: '40%',
            marginLeft: 'auto'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Helvetica',
              fontWeight: 400,
              fontSize: isPCOrOver ? '12px' : '11px',
              lineHeight: '120%',
              textAlign: 'right',
              color: Colors.text.gray
            }}
          >
            Level: {sessionLevel}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Helvetica',
              fontWeight: 400,
              fontSize: isPCOrOver ? '12px' : '11px',
              lineHeight: '120%',
              textAlign: 'right',
              color: Colors.text.gray
            }}
          >
            {sessionType}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
