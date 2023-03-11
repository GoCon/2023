import React, { useMemo } from 'react'
import { Typography, Box } from '@mui/material'
import { handleChangeLanguage } from 'src/i18n/util'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Colors } from 'src/styles/color'
import { useTranslation } from 'react-i18next'
import { useScrollY } from 'src/modules/hooks'

interface HeaderItemColors {
  default: string
  hover: string
  activeBg: string
}

export const HeaderMenu = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const isScrolled = useScrollY() > 0
  const headerItemColors: HeaderItemColors = isScrolled
    ? { default: Colors.text.white, hover: Colors.text.white_hover, activeBg: Colors.header.active.white }
    : { default: Colors.text.primary, hover: Colors.text.primary_hover, activeBg: Colors.header.active.default }
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

  const menuList = useMemo(() => {
    return [
      { path: '/', label: 'Home' },
      { path: '/sessions', label: 'Sessions' },
      { path: '/timetable', label: 'Timetable' },
      { path: '/floor_guide', label: 'Floor Guide' },
      {
        label: t('change_language'),
        onClick: handleChangeLanguage
      }
    ]
  }, [t])

  return (
    <Box sx={{ margin: '0 24px 0 auto' }}>
      {menuList.map((list, i) => {
        return list.path ? (
          <Link href={list.path} key={i}>
            <Typography
              sx={{
                display: 'inline',
                borderBottom: router.pathname === list.path ? '3px solid' : '',
                color: headerItemColors.default,
                p: '4px 8px',
                ...headerItemBehaviorStyles
              }}
            >
              {list.label}
            </Typography>
          </Link>
        ) : (
          <Typography
            onClick={list.onClick}
            sx={{
              display: 'inline',
              color: headerItemColors.default,
              p: '4px 8px',
              ...headerItemBehaviorStyles
            }}
          >
            {list.label}
          </Typography>
        )
      })}
    </Box>
  )
}
