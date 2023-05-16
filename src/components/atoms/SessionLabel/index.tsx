import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'

type Props = {
  sessionId: string
  room: 'a' | 'b'
  isRoomNameDisplayed: boolean
}

const getLabelStyle = (room: Props['room']) => {
  switch (room) {
    case 'a':
      return { backgroundColor: Colors.background.primary_pink, roomName: 'Room A' } as const
    case 'b':
      return { backgroundColor: Colors.background.primary_green, roomName: 'Room B' } as const
    default:
      throw new Error(`Invalid room ${room}`)
  }
}

export const SessionLabel = ({ sessionId, room, isRoomNameDisplayed }: Props) => {
  const { backgroundColor, roomName } = getLabelStyle(room)
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor,
        borderRadius: '2px',
        padding: '2px 4px'
      }}
    >
      <Typography variant="caption" sx={{ color: Colors.text.white }}>
        {isRoomNameDisplayed ? `${roomName} : ${sessionId}` : sessionId}
      </Typography>
    </Box>
  )
}
