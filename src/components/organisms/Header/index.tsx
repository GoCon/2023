import { useState, useMemo } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { AppBar, Toolbar, Box, IconButton } from '@mui/material'
import { Colors } from 'src/styles/color'
import { Logo } from 'src/components/atoms'
import { useScrollY, useSize } from 'src/modules/hooks'
import { HeaderMenu } from 'src/components/molecules/HeaderMenu'
import { ModalHeaderMenu } from 'src/components/modals/ModalHeaderMenu'
import { handleChangeLanguage } from 'src/i18n/util'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export interface HeaderItemColor {
  default: string
  hover: string
  activeBg: string
}

export type HeaderMenuItem = {
  href?: string
  label: string
  onClick?: () => void
  openNewTab?: boolean
}

export type HeaderItemBehaviorStyles = {
  '&:hover': {
    cursor: string
    color: string
  }
  '&:active': {
    color: string
    backgroundColor: string
  }
}

export const Header = () => {
  const [modalMenuOpen, setModalMenuOpen] = useState(false)
  const { t } = useTranslation()
  const isScrolled = useScrollY() > 0
  const { isPCOrOver } = useSize()
  const isLogoDisplayed = isPCOrOver || isScrolled
  const headerItemColor: HeaderItemColor = isScrolled
    ? { default: Colors.text.white, hover: Colors.text.white_hover, activeBg: Colors.header.active.white }
    : { default: Colors.text.primary, hover: Colors.text.primary_hover, activeBg: Colors.header.active.default }
  const headerItemBehaviorStyles: HeaderItemBehaviorStyles = {
    '&:hover': {
      cursor: 'pointer',
      color: headerItemColor.hover
    },
    '&:active': {
      color: headerItemColor.hover,
      backgroundColor: headerItemColor.activeBg
    }
  }

  const menuList: HeaderMenuItem[] = useMemo(() => {
    return [
      { href: '/', label: 'Home' },
      { href: '/sessions', label: 'Sessions' },
      { href: '/timetable', label: 'Timetable' },
      { href: '/floor_guide', label: 'Floor Guide' },
      { href: '/staff', label: 'Staff' },
      {
        label: t('change_language'),
        onClick: handleChangeLanguage
      }
    ]
  }, [t])

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
            <Link href="/">
              <Logo
                sx={{
                  width: isPCOrOver ? '233px' : '140px',
                  height: isPCOrOver ? '40px' : '24px',
                  color: headerItemColor.default,
                  marginLeft: '12px',
                  borderRadius: '8px',
                  ...headerItemBehaviorStyles
                }}
              />
            </Link>
          </Box>
        )}
        {isPCOrOver ? (
          <HeaderMenu itemColor={headerItemColor} menuList={menuList} itemBehaviorStyles={headerItemBehaviorStyles} />
        ) : (
          <Box flex={1} display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setModalMenuOpen(true)}>
              <MenuRoundedIcon sx={{ fontSize: 24, color: headerItemColor.default }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
      <ModalHeaderMenu open={modalMenuOpen} onClose={() => setModalMenuOpen(false)} menuList={menuList} />
    </AppBar>
  )
}
