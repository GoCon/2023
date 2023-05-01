import type { FC } from 'react'
import { Box, Typography } from '@mui/material'
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
import { sponsors } from 'src/modules/sponsors'
import { SponsorsCard } from 'src/components/molecules/SponsorsCard'

export const SponsorsSection: FC = () => {
  const { isTabletOrOver } = useSize()
  const { reward } = useReward('confettiGopherPopper', 'confetti', {
    angle: 135,
    colors: confettiColors,
    position: 'absolute',
    startVelocity: 20
  })
  const { gold, silver, bronze } = sponsors

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
      <Box gap={3} mb={5} display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
        {/* NOTE: Hide SponsorsCard until the top level sponsors has fixed. */}
        {/* <SponsorsCard planType="platinumGold" sponsors={platinum} /> */}
        <SponsorsCard planType="gold" sponsors={gold} />
        <SponsorsCard planType="silver" sponsors={silver} />
        <SponsorsCard planType="bronze" sponsors={bronze} />
      </Box>
      <Box display="flex" alignItems="flex-end" justifyContent="flex-end" gap={0.5}>
        <Image src={GopherConductor} alt="gopher conductor" />
        <Image src={GopherDrummer} alt="gopher drummer" />
        <Image src={GopherTrumpeter} alt="gopher trumpeter" />
        <Image src={GopherPomPom} alt="gopher pom pom" />
        <Image src={GopherFlowerBlue} alt="gopher flower blue" />
        {isTabletOrOver && (
          <>
            <Image src={GopherFlowerPink} alt="gopher flower pink" />
            <Box onClick={reward} sx={{ '&:hover': { cursor: 'pointer' } }}>
              <span id="confettiGopherPopper" />
              <Image src={GopherPartyPopper} alt="gopher party popper" />
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}
