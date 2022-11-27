import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useSize } from 'src/modules/hooks'
import { useTranslation } from 'react-i18next'

export const TopDescription = () => {
  const { t } = useTranslation()
  const { isTabletOrOver } = useSize()
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: Colors.background.brand_color,
        p: isTabletOrOver ? '40px' : '24px 16px'
      }}
    >
      <Box maxWidth={'680px'} margin={'auto'}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: Colors.text.white }}>
            What is Go Conference?
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mb: isTabletOrOver ? '40px' : '16px' }}>
          <Typography variant="body1" sx={{ color: Colors.text.white }}>
            {t('about1')}
          </Typography>
          <Typography variant="body1" sx={{ color: Colors.text.white }}>
            {t('about2')}
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
                minWidth: isTabletOrOver ? '120px' : '100px',
                marginLeft: isTabletOrOver ? '32px' : '0'
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
                minWidth: isTabletOrOver ? '120px' : '100px',
                marginLeft: isTabletOrOver ? '32px' : '0'
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
                minWidth: isTabletOrOver ? '120px' : '100px',
                marginLeft: isTabletOrOver ? '32px' : '0'
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
