import { Typography, Box } from '@mui/material'
import { Colors } from 'src/styles/color'

export interface PlenumCardProps {
  title: string
}

export const PlenumCard = ({ title }: PlenumCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.background.secondary_blue,
        padding: '20px 16px',
        borderRadius: '4px',
        // TODO(@maito1201): タイムテーブルに組み込んだ時の適度な幅にする
        width: '100vw'
      }}
    >
      <Typography variant="body2">{title}</Typography>
    </Box>
  )
}
