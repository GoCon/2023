import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Colors } from 'src/styles/color'

export const FinishedAnnouncementSection: FC = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        backgroundColor: Colors.background.secondary,
        width: '100%',
        px: { xs: '16px', sm: '40px' },
        py: { xs: '24px', sm: '80px' }
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        {t('has_been_finished')}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: '8px' }}>
        {t('thanks_for_corporate')}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        {t('archive_will_be_published')}
      </Typography>
    </Box>
  )
}
