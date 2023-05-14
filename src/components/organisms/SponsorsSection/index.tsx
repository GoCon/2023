import type { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { sponsors } from 'src/modules/sponsors'
import { SponsorsCard } from 'src/components/molecules/SponsorsCard'

export const SponsorsSection: FC = () => {
  const { platinum, gold, silver, bronze } = sponsors

  return (
    <Box
      bgcolor={Colors.background.secondary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      px={{ xs: 2 }}
      py={{ md: 10, xs: 4 }}
    >
      <Typography variant="h2" textAlign={'center'}>
        Sponsors
      </Typography>
      <Box gap={3} display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
        <SponsorsCard planType="platinum" sponsors={platinum} />
        <SponsorsCard planType="gold" sponsors={gold} />
        <SponsorsCard planType="silver" sponsors={silver} />
        <SponsorsCard planType="bronze" sponsors={bronze} />
      </Box>
    </Box>
  )
}
