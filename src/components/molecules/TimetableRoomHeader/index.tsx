import { Box, Typography } from '@mui/material'
import { type FC } from 'react'
import { Colors } from 'src/styles/color'
// TODO: スポンサーイラストの掲載許可が取れたらコメントアウトを外す。
// import Image from 'next/image'

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

// TODO: スポンサーイラストの掲載許可が取れたらコメントアウトを外す。
// const getImage = (roomName: Props['roomName']) => {
//   switch (roomName) {
//     case 'Room A':
//       return { src: '/rooms/gopher_room_a.png' }
//     case 'Room B':
//       return { src: '/rooms/gopher_room_b.png' }
//     default:
//       throw new Error(`Invalid room: ${roomName}`)
//   }
// }

export const TimetableRoomHeader: FC<Props> = ({ roomName }) => {
  const { backgroundColor } = getBackgroundColor(roomName)
  // TODO: スポンサーイラストの掲載許可が取れたらコメントアウトを外す。
  // const { src } = getImage(roomName)

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
      {/* TODO: スポンサーイラストの掲載許可が取れたらコメントアウトを外す。
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
          border: `4px solid ${backgroundColor}`,
          borderRadius: '50%'
        }}
      /> */}
    </Box>
  )
}
