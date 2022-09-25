import React from 'react'
import i18n from 'src/i18n/configs'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useTranslation } from "react-i18next"

const handleChangeLanguage = () => {
  switch (i18n.language) {
    case 'ja':
      i18n.changeLanguage('en')
      return
    case 'en':
      i18n.changeLanguage('ja')
      return
  }
}

// TODO: デザイン作る
export const Header = () => {
  const { t } = useTranslation()

  return (
    <AppBar position='static' sx={{ backgroundColor: Colors.background.gopher_blue }}>
      <Toolbar disableGutters sx={{ marginLeft: '10px' }}>
        <Box>
          <Typography
            variant='h6'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Go Conference 2023
          </Typography>
        </Box>
        <Box sx={{margin: '0 10px 0 auto'}}>
          <Typography onClick={handleChangeLanguage}>
            {t('change_language')}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
