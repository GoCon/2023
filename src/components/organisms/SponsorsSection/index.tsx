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

export const SponsorsSection: FC = () => {
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
      bgcolor={Colors.background.secondary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mb={{ md: 12.5, xs: 7.5 }}
      px={{ xs: 2 }}
      py={{ md: 10, xs: 4 }}
    >
      <Typography variant="h2" textAlign={'center'}>
        Sponsors
      </Typography>
      {/* TODO: This description will be changed as soon as the official wording is fixed. */}
      <Typography variant="body1" mb={{ md: 5, xs: 2 }}>
        {t('sponsors_description')}
      </Typography>
      {/* NOTE: Hide SponsorsCard until the top level sponsors has fixed.
      <Box gap={3} mb={5} display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
        <SponsorsCard planType="platinumGold" logoImages={[]} />
        <SponsorsCard planType="gold" logoImages={[]} />
        <SponsorsCard planType="silver" logoImages={[]}/>
        <SponsorsCard planType="bronze" logoImages={[]}/>
      </Box> */}
      <Box display="grid" gridTemplateColumns={isTabletOrOver ? '1fr 1fr 1fr' : '1fr'} gap={2}>
        {isTabletOrOver && (
          <Box display="flex" alignItems="flex-end" justifyContent="flex-end" gap={0.5}>
            <Image src={GopherConductor} alt="gopher conductor" />
            <Image src={GopherDrummer} alt="gopher drummer" />
            <Image src={GopherTrumpeter} alt="gopher trumpeter" />
            <Image src={GopherPomPom} alt="gopher pom pom" />
          </Box>
        )}
        <Link href="https://drive.google.com/file/d/1wwFeJk0rT0SydwDi2wx4wVVAD6psDUrL/view?usp=share_link">
          <a target="_blank">
            <Button text={t('consider_a_sponsor')} />
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
