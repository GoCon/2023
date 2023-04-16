import { Typography, Box } from '@mui/material'
import { Colors } from 'src/styles/color'
import Image, { StaticImageData } from 'next/image'

export interface TrackCardProps {
  id?: string
  title: string
  minute?: number
  speaker?: string
  speakerIcon?: string | StaticImageData
  color?: string
  idColor: string
  fullWidth: boolean
}

export const TrackCard = ({
  id,
  title,
  minute,
  speaker,
  speakerIcon,
  color = Colors.background.secondary_pink,
  idColor = Colors.background.primary_pink,
  fullWidth = false
}: TrackCardProps) => {
  return (
    <Box position="relative">
      <Box
        sx={{
          backgroundColor: color,
          // TODO(@maito1201): fullWidthがtrueの時の挙動はタイムテーブルの時刻表示を考慮したものを実装する
          width: fullWidth ? '100vw' : '100%',
          padding: '16px',
          position: 'absolute',
          borderRadius: '4px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            backgroundColor: idColor,
            borderRadius: '2px',
            width: 'fit-content',
            padding: '0 4px'
          }}
        >
          <Typography variant="caption" color={Colors.text.white}>
            {id}
          </Typography>
        </Box>
        <Box mb="4">
          <Typography variant="body2">{title}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          {speakerIcon && (
            <Box width="20px" height="20px" borderRadius="50%" overflow="hidden" margin="0 4px 0 0">
              <Image
                src={speakerIcon}
                width={20}
                height={20}
                objectFit="fill"
                layout="fixed"
                alt="Icon"
                quality={100}
              />
            </Box>
          )}
          <Typography variant="caption" fontWeight="bold">
            {speaker}
          </Typography>
          {minute && (
            <Typography variant="caption" margin="0 0 0 auto">
              ({minute}min)
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}
