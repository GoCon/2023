import { Typography, Box } from '@mui/material'
import { Colors } from 'src/styles/color'
import Image, { StaticImageData } from 'next/image'

export interface TrackCardProps {
  id: string
  title: string
  minute: number
  speaker: string
  speakerIcon: string | StaticImageData
  color?: string
  idColor?: string
}

export const TrackCard = ({
  id,
  title,
  minute,
  speaker,
  speakerIcon,
  color = Colors.background.secondary_pink,
  idColor = Colors.background.primary_pink
}: TrackCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        padding: '16px',
        borderRadius: '4px',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: idColor,
          borderRadius: '2px',
          width: 'fit-content',
          padding: '0 4px',
          mb: '4px'
        }}
      >
        <Typography variant="caption" color={Colors.text.white}>
          {id}
        </Typography>
      </Box>
      <Box mb="4px">
        <Typography variant="body2">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Box width="20px" height="20px" borderRadius="50%" overflow="hidden" margin="0 4px 0 0">
          <Image
            src={speakerIcon}
            width={20}
            height={20}
            style={{ objectFit: 'contain' }}
            alt={`${speaker}'s icon`}
            quality={100}
          />
        </Box>
        <Typography variant="caption" fontWeight="bold">
          {speaker}
        </Typography>
        <Typography variant="caption" margin="0 0 0 auto">
          ({minute}min)
        </Typography>
      </Box>
    </Box>
  )
}
