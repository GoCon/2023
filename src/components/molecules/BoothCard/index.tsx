import { Typography, Box } from '@mui/material'

export interface BoothCardProps {
  title: string
  description: string
}

export const BoothCard = ({ title, description }: BoothCardProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} py={4}>
      <Typography variant="h3">{title}</Typography>
      <Typography
        variant="body2"
        sx={{ mb: '24px', maxWidth: '680px', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
      >
        {description}
      </Typography>
    </Box>
  )
}
