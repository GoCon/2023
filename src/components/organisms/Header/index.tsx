import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { AppBar, Toolbar, Box, IconButton } from '@mui/material'
import { Colors } from 'src/styles/color'
import { Logo } from 'src/components/atoms'
import { useScrollY, useSize } from 'src/modules/hooks'
import { HeaderMenu } from 'src/components/molecules/HeaderMenu'
import { ModalHeaderMenu } from 'src/components/modals/ModalHeaderMenu'

interface HeaderItemColors {
  default: string
  hover: string
  activeBg: string
}

export const Header = () => {
  const isScrolled = useScrollY() > 0
  const [modalMenuOpen, setModalMenuOpen] = useState(false)
  const headerItemColors: HeaderItemColors = isScrolled
    ? { default: Colors.text.white, hover: Colors.text.white_hover, activeBg: Colors.header.active.white }
    : { default: Colors.text.primary, hover: Colors.text.primary_hover, activeBg: Colors.header.active.default }
  const { isPCOrOver } = useSize()
  const isLogoDisplayed = isPCOrOver || isScrolled
  const headerItemBehaviorStyles = {
    '&:hover': {
      cursor: 'pointer',
      color: headerItemColors.hover
    },
    '&:active': {
      color: headerItemColors.hover,
      backgroundColor: headerItemColors.activeBg
    }
  }

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
            <Logo
              sx={{
                width: isPCOrOver ? '233px' : '140px',
                height: isPCOrOver ? '40px' : '24px',
                color: headerItemColors.default,
                marginLeft: '12px',
                borderRadius: '8px',
                ...headerItemBehaviorStyles
              }}
            />
          </Box>
        )}
        {isPCOrOver ? (
          <HeaderMenu />
        ) : (
          <Box flex={1} display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setModalMenuOpen(true)}>
              <MenuRoundedIcon sx={{ fontSize: 24, color: headerItemColors.default }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
      <ModalHeaderMenu open={modalMenuOpen} onClose={() => setModalMenuOpen(false)} />
    </AppBar>
  )
}
