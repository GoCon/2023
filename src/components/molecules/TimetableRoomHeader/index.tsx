import { Box, Typography } from '@mui/material'
import { type FC } from 'react'
import { Colors } from 'src/styles/color'
import Image from 'next/image'
import { GopherRoomA, GopherRoomB } from './images'

type Props = {
  roomName: 'Room A' | 'Room B'
}

const getBackgroundColor = (roomName: Props['roomName']) => {
  switch (roomName) {
    case 'Room A':
      return { backgroundColor: Colors.background.primary_pink }
    case 'Room B':
      return { backgroundColor: Colors.background.primary_green }
    default:
      throw new Error(`Invalid room: ${roomName}`)
  }
}

const getImage = (roomName: Props['roomName']) => {
  switch (roomName) {
    case 'Room A':
      return { src: GopherRoomA }
    case 'Room B':
      return { src: GopherRoomB }
    default:
      throw new Error(`Invalid room: ${roomName}`)
  }
}

export const TimetableRoomHeader: FC<Props> = ({ roomName }) => {
  const { backgroundColor } = getBackgroundColor(roomName)
  const { src } = getImage(roomName)

  return (
    <Box sx={{ position: 'relative', backgroundColor: backgroundColor, borderRadius: '8px 8px 0 0' }}>
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: Colors.text.white,
          padding: '8px 16px',
          margin: 0
        }}
      >
        {roomName}
      </Typography>
      <Image
        src={src}
        alt={`illustration of Gopher for ${roomName}`}
        width={64}
        height={64}
        style={{
          position: 'absolute',
          right: '16px',
          top: '0',
          bottom: '0',
          margin: 'auto 0',
          backgroundColor: Colors.background.primary,
          border: `4px solid ${backgroundColor}`,
          borderRadius: '50%'
        }}
      />
    </Box>
  )
}
