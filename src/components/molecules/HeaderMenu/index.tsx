import React from 'react'
import { Typography, Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useScrollY } from 'src/modules/hooks'
import { HeaderItemColor, HeaderMenuItem, HeaderItemBehaviorStyles } from 'src/components/organisms/Header'

export interface HeaderMenuProps {
  menuList: HeaderMenuItem[]
  itemColor: HeaderItemColor
  itemBehaviorStyles: HeaderItemBehaviorStyles
}

export const HeaderMenu = ({ menuList, itemColor, itemBehaviorStyles }: HeaderMenuProps) => {
  const router = useRouter()
  const isScrolled = useScrollY() > 0

  return (
    <Box sx={{ display: 'flex', gap: '8px', margin: '0 24px 0 auto' }}>
      {menuList.map((list, i) => {
        return list.href ? (
          <Link href={list.href} key={i}>
            <Typography
              sx={{
                borderBottom: router.pathname === list.href ? '3px solid' : '',
                color: itemColor.default,
                p: '4px 8px',
                ...itemBehaviorStyles
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
              color: itemColor.default,
              p: '4px 8px',
              ...itemBehaviorStyles
            }}
          >
            {list.label}
          </Typography>
        )
      })}
    </Box>
  )
}
