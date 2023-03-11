import { useMemo } from 'react'

import { Box, Modal, Slide, ButtonBase, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from 'src/components/atoms'
import { handleChangeLanguage } from 'src/i18n/util'
import { Colors } from 'src/styles/color'
import { useTranslation } from 'react-i18next'

export interface ModalMenuProps {
  open: boolean
  onClose: () => void
  projectName?: string
}

export const ModalHeaderMenu = ({ open, onClose, projectName }: ModalMenuProps) => {
  const theme = useTheme()
  const router = useRouter()
  const { t } = useTranslation()

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
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', zIndex: 9999 }}>
      <Slide in={open} direction="down">
        <Box
          height="270px"
          width={1}
          pt="2px"
          pb="24px"
          px="4px"
          color={Colors.text.white}
          sx={{ background: Colors.background.brand_color }}
          display="flex"
          flex={1}
          flexDirection="column"
          alignItems="center"
          marginBottom="21px"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center" width={1} mb="16px">
            <Box>
              <Logo
                sx={{
                  width: '140px',
                  height: '24px',
                  color: Colors.text.white,
                  marginLeft: '12px',
                  marginTop: '8px'
                }}
              />
            </Box>
            <Box flex={1} display="flex" justifyContent="flex-end" onClick={onClose}>
              <IconButton color="inherit">
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" flex={1} flexDirection="column" alignItems="center" justifyContent="space-between">
            {menuList.map((list, i) => {
              return (
                <Link key={i} href={list.path || router.asPath}>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      height: '28px',
                      boxSizing: 'border-box',
                      color: Colors.text.white,
                      textDecoration: 'none',
                      borderBottom: router.pathname === list.path ? '3px solid' : ''
                    }}
                  >
                    {list.onClick ? (
                      <ButtonBase onClick={list.onClick}>
                        <Typography variant="body1" color="inherit" sx={{ textAlign: 'left' }}>
                          {list.label}
                        </Typography>
                      </ButtonBase>
                    ) : (
                      <Typography variant="body1" color="inherit" sx={{ textAlign: 'left' }}>
                        {list.label}
                      </Typography>
                    )}
                  </Box>
                </Link>
              )
            })}
          </Box>
        </Box>
      </Slide>
    </Modal>
  )
}
