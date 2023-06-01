import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { ReBakoLayout, FloorImage } from './images'

export const VenueInfoSection = () => {
  const { t } = useTranslation()
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        <Image src={ReBakoLayout} alt="reBako layout" fill style={{ objectFit: 'contain' }} />
      </Box>
      <Box sx={{ position: 'relative', width: { xs: '100%', sm: '50%' }, aspectRatio: '16/7' }}>
        <Image src={FloorImage} alt="floor map" fill style={{ objectFit: 'contain', borderRadius: '8px' }} />
      </Box>
      <Typography variant="body2" sx={{ mb: '24px', maxWidth: '680px' }}>
        {t('floor_guide')}
      </Typography>
    </Box>
  )
}
