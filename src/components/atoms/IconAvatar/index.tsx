import { Avatar } from '@mui/material'
import { FC } from 'react'

type Props = {
  iconUrl: string
  name: string
}

export const IconAvatar: FC<Props> = ({ iconUrl, name }) => {
  return (
    <Avatar
      alt={name}
      src={iconUrl}
      sx={{
        width: '40px',
        height: '40px',
        border: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    />
  )
}
