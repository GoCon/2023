import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { Colors } from 'src/styles/color'

type Props = {
  sessionId: string
  roomName: 'Room A' | 'Room B'
  isRoomNameDisplayed: boolean
}

const getLabelStyle = (roomName: Props['roomName']) => {
  switch (roomName) {
    case 'Room A':
      return { backgroundColor: Colors.background.primary_pink } as const
    case 'Room B':
      return { backgroundColor: Colors.background.primary_green } as const
    default:
      throw new Error(`Invalid room ${roomName}`)
  }
}

export const SessionLabel: FC<Props> = ({ sessionId, roomName: roomName, isRoomNameDisplayed }) => {
  const { backgroundColor } = getLabelStyle(roomName)
  return (
    <Box
      sx={{
        display: 'inline-flex',
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
