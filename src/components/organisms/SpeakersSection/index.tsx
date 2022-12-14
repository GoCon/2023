import type { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'
import { Colors, confettiColors } from 'src/styles/color'
import {
  GopherConductor,
  GopherDrummer,
  GopherFlowerBlue,
  GopherFlowerPink,
  GopherPartyPopper,
  GopherPomPom,
  GopherTrumpeter
} from 'src/images/gopher'
import Image from 'next/image'
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
        <Typography variant="body2">{t('application_started')}: 2022.12.01 Thu</Typography>
        <Typography variant="body2">{t('application_closed')}: 2023.01.31 Sat</Typography>
      </Box>
      <Box display="grid" gridTemplateColumns={isTabletOrOver ? '1fr 1fr 1fr' : '1fr'} gap={2}>
        {isTabletOrOver && (
          <Box display="flex" alignItems="flex-end" justifyContent="flex-end" gap={0.5}>
            <Image src={GopherConductor} alt="gopher conductor" />
            <Image src={GopherDrummer} alt="gopher drummer" />
            <Image src={GopherTrumpeter} alt="gopher trumpeter" />
            <Image src={GopherPomPom} alt="gopher pom pom" />
          </Box>
        )}
        <Link href="https://sessionize.com/go-conference-2023-online/">
          <a target="_blank">
            <Button text={t('apply_for_speaker')} />
          </a>
        </Link>
        {isTabletOrOver && (
          <Box display="flex" alignItems="flex-end" gap={0.5}>
            <Image src={GopherFlowerBlue} alt="gopher flower blue" />
            <Image src={GopherFlowerPink} alt="gopher flower pink" />
            <Box onClick={reward} sx={{ '&:hover': { cursor: 'pointer' } }}>
              <span id="confettiGopherPopper" />
              <Image src={GopherPartyPopper} alt="gopher party popper" />
            </Box>
          </Box>
        )}
      </Box>
      {!isTabletOrOver && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: 0,
            top: '56px',
            right: 0,
            display: 'flex',
            alignItems: 'flex-end',
            opacity: 0.7
          }}
        >
          <Image src={GopherConductor} alt="gopher conductor" width="56px" objectFit="contain" />
          <Image src={GopherDrummer} alt="gopher drummer" width="52px" objectFit="contain" />
        </Box>
      )}
    </Box>
  )
}
