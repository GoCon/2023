import { Avatar } from '@mui/material'
import { FC } from 'react'

type Props = {
  iconUrl: string
  name: string
  size: '20px' | '32px' | '40px' | '60px'
}

export const SpeakerIcon: FC<Props> = ({ iconUrl, name, size }) => {
  return (
    <Avatar
      alt={name}
      src={iconUrl}
      sx={{
        width: size,
        height: size,
        border: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    />
  )
}
