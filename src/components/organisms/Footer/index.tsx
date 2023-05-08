import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { Trans, useTranslation } from 'react-i18next'
import { useSize } from 'src/modules/hooks'
import { FooterBottom } from 'src/components/organisms/Footer/FooterBottom'
import { IconTwitter } from 'src/components/atoms'

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
            <Typography variant="h4" sx={{ color: Colors.text.default }}>
              About
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <a href="https://go.dev/conduct" target="_blank">
                <Typography variant="body2" sx={{ color: Colors.text.default }}>
                  Code of Conduct
                </Typography>
              </a>
              <a href="mailto:info@gocon.jp" target="_blank">
                <Typography variant="body2" sx={{ color: Colors.text.default }}>
                  INFO@GOCON.JP
                </Typography>
              </a>
              <a
                href="https://drive.google.com/file/d/1Xon1uyLT-810sxnkLMngmL67z68K3XJG/view?usp=share_a"
                target="_blank"
              >
                <Typography variant="body2" sx={{ color: Colors.text.default }}>
                  {t('act_on_specified_commercial_transactions')}
                </Typography>
              </a>
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
              variant="h4"
              sx={{
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
                <a href={href} key={label} target="_blank">
                  <Typography
                    variant="body2"
                    key={label}
                    sx={{
                      color: Colors.text.default
                    }}
                  >
                    {label}
                  </Typography>
                </a>
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
          <a href="https://twitter.com/hashtag/gocon" target="_blank">
            <Typography
              variant="body2"
              sx={{
                color: Colors.text.secondary_default
              }}
            >
              #GOCON
            </Typography>
          </a>
        </Box>
        <Box
          sx={
            isTabletOrOver
              ? {
                  position: 'absolute',
                  right: '0px',
                  fontSize: '12px'
                }
              : {
                  fontSize: '10px'
                }
          }
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: isTabletOrOver ? '12px' : '10px',
              lineHeight: '140%',
              color: Colors.text.secondary_default,
              textAlign: isTabletOrOver ? 'right' : 'left'
            }}
          >
            Go Conference
          </Typography>
          <Typography variant="caption">
            <Trans t={t} i18nKey="gopher_copyright">
              the_gopher_was_desigined_by
              <a href="http://reneefrench.blogspot.com/" target="_blank">
                author
              </a>
              illustrations_by
              <a href="https://twitter.com/tottie_designer" target="_blank">
                author
              </a>
              .
            </Trans>
          </Typography>
        </Box>
      </FooterBottom>
    </Box>
  )
}
