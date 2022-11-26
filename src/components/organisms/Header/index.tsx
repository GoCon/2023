import React from 'react'
import i18n from 'src/i18n/configs'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useTranslation } from 'react-i18next'
import { Logo } from 'src/components/atoms'
import { useScrollY, useSize } from 'src/modules/hooks'

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

// TODO: 各ページへのリンクを実装, スマートフォンモード実装
export const Header = () => {
  const isScrolled = useScrollY() > 0
  const fontColor = isScrolled ? 'white' : 'black'
  const { t } = useTranslation()
  const { isPCOrOver } = useSize()
  const isLogoDisplayed = isPCOrOver || isScrolled

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff0', height: '100px', boxShadow: 0 }}>
      {/* グラデーション背景 */}
      <Box
        sx={{
          transition: '200ms all linear',
          position: 'absolute',
          width: '100%',
          height: '128px',
          background: Colors.background.gradation_blue,
          opacity: isScrolled ? 1 : 0
        }}
      />

      <Toolbar disableGutters>
        {isLogoDisplayed && (
          <Box>
            <Logo sx={{ width: '233px', height: '40px', color: fontColor, marginLeft: '12px' }} />
          </Box>
        )}
        <Box sx={{ margin: '0 24px 0 auto' }}>
          <Typography onClick={handleChangeLanguage} sx={{ color: fontColor }}>
            {t('change_language')}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
