import type { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'
import { Colors } from 'src/styles/color'

export const SponsorsSection: FC = () => {
  const { t } = useTranslation()

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
      <Typography variant="h1" mb={5} textAlign={'center'}>
        Sponsors
      </Typography>
      {/* TODO: This description will be changed as soon as the official wording is fixed. */}
      <Typography variant="body1" mb={5} fontSize={{ md: '1.5rem', xs: '1rem' }}>
        {t('sponsors_description')}
      </Typography>
      {/* NOTE: Hide SponsorsCard until the top level sponsors has fixed.
      <Box gap={3} mb={5} display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
        <SponsorsCard planType="platinumGold" logoImages={[]} />
        <SponsorsCard planType="gold" logoImages={[]} />
        <SponsorsCard planType="silver" logoImages={[]}/>
        <SponsorsCard planType="bronze" logoImages={[]}/>
      </Box> */}
      <Link href="https://forms.gle/nbTxbQ6Fe4D4uY9B7">
        <a target="_blank">
          <Button text={t('consider_a_sponsor')} />
        </a>
      </Link>
    </Box>
  )
}
