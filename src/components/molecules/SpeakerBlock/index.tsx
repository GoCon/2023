import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { IconAvatar } from 'src/components/atoms/IconAvatar'
import { useSize } from 'src/modules/hooks'
import { Colors } from 'src/styles/color'

type Props = {
  iconUrl: string
  name: string
  tagLine: string
}

export const SpeakerBlock: FC<Props> = ({ iconUrl, name, tagLine }) => {
  const { isPCOrOver } = useSize()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <IconAvatar iconUrl={iconUrl} name={name} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Helvetica',
            fontWeight: 700,
            fontSize: isPCOrOver ? '16px' : '14px',
            lineHeight: '120%',
            color: Colors.text.primary
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Helvetica',
            fontWeight: 400,
            fontSize: isPCOrOver ? '12px' : '11px',
            lineHeight: '120%',
            color: Colors.text.gray
          }}
        >
          {tagLine}
        </Typography>
      </Box>
    </Box>
  )
}
