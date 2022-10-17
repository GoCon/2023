import { Box } from '@mui/material'
import { useSize } from 'src/modules/common/hooks'

interface FooterBottomProps {
  children: React.ReactNode
}

export const FooterBottom = ({ children }: FooterBottomProps) => {
  const { isTabletOrOver } = useSize()

  return (
    <>
      {isTabletOrOver ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '24px 0px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: '0px 36px',
              gap: '10px'
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '34px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  p: 0,
                  gap: '24px'
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '16px',
            gap: '9px'
          }}
        >
          {children}
        </Box>
      )}
    </>
  )
}
