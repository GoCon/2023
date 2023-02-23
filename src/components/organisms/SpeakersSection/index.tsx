import type { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'
import { Colors, confettiColors } from 'src/styles/color'
import { useSize } from 'src/modules/hooks'
import { useReward } from 'react-rewards'

export const SpeakersSection: FC = () => {
  const { t } = useTranslation()
  const { isTabletOrOver } = useSize()
  const { reward } = useReward('confettiGopherPopper', 'confetti', {
    angle: 135,
    colors: confettiColors,
    position: 'absolute',
    startVelocity: 20
  })

  return (
    <Box
      bgcolor={Colors.background.primary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      py={{ md: 10, xs: 4 }}
      position="relative"
    >
      <Typography variant="h2">Call for Speakers!</Typography>
      <Box mb={1}>
        <Typography variant="body2">{t('application_result_will_be_noticed')}</Typography>
      </Box>
      <Link href="https://sessionize.com/go-conference-2023-online/">
        <a target="_blank">
          <Button text={t('check_cfp')} />
        </a>
      </Link>
    </Box>
  )
}
