import { Typography, Box } from '@mui/material'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import FloorImage from 'src/images/floor-image.png'

export const VenueInfoSection = () => {
  const { t } = useTranslation()
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb="32px" width="320px" height="140px" position="relative" display="flex" alignItems="center">
        <Image src={FloorImage} alt="floor map" fill style={{ objectFit: 'contain', borderRadius: '8px' }} />
      </Box>
      <Typography variant="body2" sx={{ mb: '24px', maxWidth: '680px' }}>
        {t('floor_guide')}
      </Typography>
      <Box>
        {/* TODO: reBakoのリンクを実装する
          <a href="#" target="_blank">
          <Button text={t('enter_venue')} />
          </a>
        */}
      </Box>
    </Box>
  )
}
