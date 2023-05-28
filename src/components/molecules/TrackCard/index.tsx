import { Typography, Box } from '@mui/material'
import { Colors } from 'src/styles/color'
import Image from 'next/image'
import { FC } from 'react'
import { SessionLabel } from 'src/components/atoms/SessionLabel'
import Link from 'next/link'

export type TrackCardProps = {
  roomName: 'Room A' | 'Room B'
  sessionId: string
  title: string
  sessionType: string | null
  speakerName: string
  profilePicture: string
}

const getBackgroundColor = (roomName: TrackCardProps['roomName']) => {
  switch (roomName) {
    case 'Room A':
      return { backgroundColor: Colors.background.secondary_pink } as const
    case 'Room B':
      return { backgroundColor: Colors.background.secondary_green } as const
    default:
      throw new Error(`Invalid room ${roomName}`)
  }
}

const getHeight = (sessionType: TrackCardProps['sessionType']) => {
  const defaultHeight = { height: '140px' }
  if (!sessionType) {
    return defaultHeight
  }
  if (sessionType.includes('40min')) {
    return { height: '280px' }
  }
  return defaultHeight
}

export const TrackCard: FC<TrackCardProps> = ({
  roomName,
  sessionId,
  title,
  sessionType,
  speakerName,
  profilePicture
}) => {
  const { backgroundColor } = getBackgroundColor(roomName)
  const { height } = getHeight(sessionType)

  return (
    <Link href={`/sessions/${sessionId}`}>
      <Box
        sx={{
          backgroundColor: backgroundColor,
          padding: '16px',
          borderRadius: '4px',
          width: '100%',
          height: height,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          ':hover': {
            opacity: '0.6'
          }
        }}
      >
        <SessionLabel sessionId={sessionId} roomName={roomName} isRoomNameDisplayed={false} />
        <Typography
          variant="body2"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            wordBreak: 'break-word',
            flexGrow: 1
          }}
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Box width="20px" height="20px" borderRadius="50%" overflow="hidden" margin="0 4px 0 0">
            <Image
              src={profilePicture}
              width={20}
              height={20}
              style={{ objectFit: 'contain' }}
              alt={`${speakerName}'s icon`}
              quality={100}
            />
          </Box>
          <Typography variant="caption" fontWeight="bold">
            {speakerName}
          </Typography>
          <Typography variant="caption" margin="0 0 0 auto">
            {sessionType}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}
