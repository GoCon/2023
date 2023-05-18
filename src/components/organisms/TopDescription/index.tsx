import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { Trans, useTranslation } from 'react-i18next'

export const TopDescription = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: Colors.background.brand_color,
        p: { xs: '24px 16px', sm: '40px' }
      }}
    >
      <Box maxWidth={'680px'} margin={'auto'}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: Colors.text.white }}>
            What is Go Conference?
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mb: { xs: '16px', sm: '40px' } }}>
          <Typography
            variant="body1"
            sx={{ color: Colors.text.white, wordBreak: 'keep-all', overflowWrap: 'break-word' }}
          >
            <Trans t={t} i18nKey="about" />
          </Typography>
        </Box>
        <Box mb={'40px'}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.white,
                textAlign: 'right',
                minWidth: { xs: '100px', sm: '120px' },
                marginLeft: { xs: '0', sm: '32px' }
              }}
            >
              {t('session')}:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.white,
                marginLeft: '12px'
              }}
            >
              {t('session_num')}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.white,
                textAlign: 'right',
                minWidth: { xs: '100px', sm: '120px' },
                marginLeft: { xs: '0', sm: '32px' }
              }}
            >
              {t('target')}:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.white,
                marginLeft: '12px'
              }}
            >
              {t('target_info')}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap'
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.white,
                textAlign: 'right',
                minWidth: { xs: '100px', sm: '120px' },
                marginLeft: { xs: '0', sm: '32px' }
              }}
            >
              {t('host')}:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.white,
                marginLeft: '12px'
              }}
            >
              {t('gophers_japan')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
