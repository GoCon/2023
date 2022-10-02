import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useTranslation } from 'react-i18next'

export const footerHeight = 60

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        width: '100%',
        height: footerHeight,
        backgroundColor: Colors.background.darken_1,
        p: 1.5
      }}
    >
      <Typography variant="caption" color={Colors.text.secondary}>
        {t('gopher_copyright')}
      </Typography>
    </Box>
  )
}
