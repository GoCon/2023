import { Typography, Box } from '@mui/material'
import { FC } from 'react'
import { Colors } from 'src/styles/color'

export type PlenumCardProps = {
  title: string
  minutes: number
}

export const PlenumCard: FC<PlenumCardProps> = ({ title, minutes }) => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.background.secondary_blue,
        padding: '20px 16px',
        borderRadius: '4px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant="body2">{title}</Typography>
      <Typography variant="caption">{`(${minutes}min)`}</Typography>
    </Box>
  )
}
