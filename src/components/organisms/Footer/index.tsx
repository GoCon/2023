import { Box, List, ListItem, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useTranslation } from 'react-i18next'
import { FooterGophers } from './FooterGophers'
import TwitterIcon from '@mui/icons-material/Twitter'
import { FC } from 'react'
import { ExternalLink } from 'src/components/atoms'

export const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <FooterGophers />
      <Box component="footer" sx={{ backgroundColor: Colors.background.footer }}>
        <Box
          sx={{
            maxWidth: '1024px',
            mx: 'auto',
            px: { xs: '16px', sm: '36px' },
            py: '32px',
            borderBottom: `solid 1px ${Colors.border.primary.highlight}`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            gap: '24px'
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ mb: '8px' }}>
              About
            </Typography>
            <List>
              <ListItem>
                <ExternalLink href="https://go.dev/conduct" color="primary">
                  Code of Conduct
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="mailto:info@gocon.jp" color="primary">
                  INFO@GOCON.JP
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink
                  href="https://drive.google.com/file/d/1Xon1uyLT-810sxnkLMngmL67z68K3XJG/view"
                  color="primary"
                >
                  {t('act_on_specified_commercial_transactions')}
                </ExternalLink>
              </ListItem>
            </List>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ mb: '8px' }}>
              Past Conferences
            </Typography>
            <List>
              <ListItem>
                <ExternalLink href="https://gocon.jp/2022spring" color="primary">
                  2022 Spring
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://gocon.jp/2021autumn" color="primary">
                  2021 Autumn
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://gocon.jp/2021spring" color="primary">
                  2021 Spring
                </ExternalLink>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: '1024px',
            mx: 'auto',
            px: { xs: '16px', sm: '36px' },
            py: '24px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <ExternalLink href="https://twitter.com/hashtag/gocon" color="primary">
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <TwitterIcon />
              <span>#GOCON</span>
            </Box>
          </ExternalLink>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Typography variant="body2" sx={{ color: Colors.text.secondary, textAlign: { xs: 'left', sm: 'right' } }}>
              Go Conference
            </Typography>
            <Typography variant="caption" sx={{ color: Colors.text.secondary, textAlign: { xs: 'left', sm: 'right' } }}>
              The Go gopher was designed by{' '}
              <ExternalLink href="http://reneefrench.blogspot.com/" color="secondary">
                Renée French
              </ExternalLink>
              . Illustrations by{' '}
              <ExternalLink href="https://twitter.com/tottie_designer" color="secondary">
                tottie
              </ExternalLink>
              .
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
