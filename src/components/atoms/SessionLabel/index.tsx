import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'

type Props = {
  text: string
  color: string
}

export const SessionLabel = ({ text, color }: Props) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: color,
        borderRadius: '2px',
        padding: '2px 4px'
      }}
    >
      <Typography variant="caption" sx={{ lineHeight: '14px', color: Colors.text.white }}>
        {text}
      </Typography>
    </Box>
  )
}
