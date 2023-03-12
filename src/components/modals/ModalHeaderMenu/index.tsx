import { Box, Modal, Slide, ButtonBase, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from 'src/components/atoms'
import { Colors } from 'src/styles/color'
import { HeaderMenuItem } from 'src/components/organisms/Header'

export interface ModalHeaderMenuProps {
  open: boolean
  onClose: () => void
  menuList: HeaderMenuItem[]
}

export const ModalHeaderMenu = ({ open, onClose, menuList }: ModalHeaderMenuProps) => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', zIndex: 9999, bottom: 'auto' }}>
      <Slide in={open} direction="down">
        <Box
          width={1}
          pt="12px"
          pb="24px"
          px="16px"
          color={Colors.text.white}
          sx={{ background: Colors.background.brand_color }}
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" width={1} mb="16px">
            <Box>
              <Logo
                sx={{
                  width: '140px',
                  height: '24px',
                  color: Colors.text.white
                }}
              />
            </Box>
            <IconButton color="inherit" onClick={onClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flex={1}
            gap="16px"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            {menuList.map((list, i) => {
              return (
                <Link key={i} href={list.href || router.asPath}>
                  <Box
                    sx={{
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                      color: Colors.text.white,
                      textDecoration: 'none',
                      borderBottom: router.pathname === list.href ? '3px solid' : ''
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
