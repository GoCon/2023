import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useTranslation } from 'react-i18next'
import { useSize } from 'src/modules/common/hooks'
import { FooterBottom } from 'src/components/organisms/Footer/FooterBottom'
import { IconTwitter, Link } from 'src/components/atoms'

export const footerHeight = 60

export const Footer = () => {
  const { t } = useTranslation()
  const { isTabletOrOver } = useSize()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colors.background.secondary,
        p: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: isTabletOrOver ? '32px' : '16px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            py: isTabletOrOver ? '36px' : '16px',
            gap: isTabletOrOver ? '24px' : '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: isTabletOrOver ? '440px' : '150px',
              flexGrow: 1,
              gap: '16px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '16px',
                color: Colors.text.default
              }}
            >
              About
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <Link href="https://go.dev/conduct" target="_blank">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    color: Colors.text.default,
                    lineHeight: '140%'
                  }}
                >
                  Code of Conduct
                </Typography>
              </Link>
              <Link href="mailto:info@gocon.jp" target="_blank">
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: '14px',
                    color: Colors.text.default,
                    lineHeight: '140%'
                  }}
                >
                  INFO@GOCON.JP
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: isTabletOrOver ? '440px' : '150px',
              flexGlow: 1,
              gap: '16px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '140%',
                color: Colors.text.default
              }}
            >
              Past Conferences
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              {[
                ['2022 Spring', 'https://gocon.jp/2022spring/'],
                ['2021 Autumn', 'https://gocon.jp/2021autumn/'],
                ['2021 Spring', 'https://gocon.jp/2021spring/']
              ].map(([label, href]) => (
                <Link href={href} key={label} target="_blank">
                  <Typography
                    key={label}
                    sx={{
                      fontSize: '14px',
                      lineHeight: '140%',
                      color: Colors.text.default
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
          {isTabletOrOver && (
            <Box
              sx={{
                width: '440px',
                flexGrow: 1
              }}
            ></Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          height: '1px',
          backgroundColor: Colors.border.primary.highlight
        }}
      ></Box>
      <FooterBottom>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            aliginItems: 'end',
            width: '150px',
            p: '0px',
            gap: '16px'
          }}
        >
          <Box
            sx={{
              width: '32px',
              height: '32px'
            }}
          >
            <IconTwitter />
          </Box>
          <Link href="https://twitter.com/hashtag/gocon" target="_blank">
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '140%',
                color: Colors.text.secondary_default
              }}
            >
              #GOCON
            </Typography>
          </Link>
        </Box>
        <Box
          sx={
            isTabletOrOver
              ? {
                  position: 'absolute',
                  right: '0px'
                }
              : {}
          }
        >
          {['Go Conference', 'The Go gopher was designed by Renee French. Illustrations by tottie.'].map(item => (
            <Typography
              key={item}
              sx={{
                fontWeight: 400,
                fontSize: isTabletOrOver ? '12px' : '10px',
                lineHeight: '140%',
                color: Colors.text.secondary_default,
                textAlign: isTabletOrOver ? 'right' : 'left'
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </FooterBottom>
    </Box>
  )
}
