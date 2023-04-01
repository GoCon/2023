import React from 'react'
import { Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'
import { HeaderItemColor, HeaderMenuItem, HeaderItemBehaviorStyles } from 'src/components/organisms/Header'
import Link from 'next/link'

export interface HeaderMenuProps {
  menuList: HeaderMenuItem[]
  itemColor: HeaderItemColor
  itemBehaviorStyles: HeaderItemBehaviorStyles
}

export const HeaderMenu = ({ menuList, itemColor, itemBehaviorStyles }: HeaderMenuProps) => {
  const router = useRouter()

  return (
    <Box sx={{ display: 'flex', gap: '8px', margin: '0 24px 0 auto' }}>
      {menuList.map((list, i) => {
        return list.href ? (
          list.href === '/' ? (
            <Link href={list.href} key={i}>
              <a>
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
              </a>
            </Link>
          ) : (
            // TODO(taigakiyokawa): Revert using `next/link` when pages have implemented.
            <a href={list.href} target="_blank" rel="noreferrer" key={i}>
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
            </a>
          )
        ) : (
          <Typography
            onClick={list.onClick}
            sx={{
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
