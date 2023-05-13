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
        paddingX: '4px',
        paddingY: '2px'
      }}
    >
      <Typography variant="label" sx={{ lineHeight: '14px', color: Colors.text.white }}>
        {text}
      </Typography>
    </Box>
  )
}
