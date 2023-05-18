import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { SpeakerIcon } from 'src/components/atoms/SpeakerIcon'
import { Colors } from 'src/styles/color'

type Props = {
  profilePicture: string
  name: string
  tagLine: string
}

export const SpeakerBlock: FC<Props> = ({ profilePicture, name, tagLine }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <SpeakerIcon iconUrl={profilePicture} name={name} size="40px" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px'
        }}
      >
        <Typography variant="h6" sx={{ color: Colors.text.primary }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: Colors.text.secondary }}>
          {tagLine}
        </Typography>
      </Box>
    </Box>
  )
}
