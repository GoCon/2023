import type { FC } from 'react'
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
      {/* NOTE: Hide SponsorsCard until the top level sponsors has fixed.
      <Box gap={3} mb={5} display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
        <SponsorsCard planType="platinumGold" logoImages={[]} />
        <SponsorsCard planType="gold" logoImages={[]} />
        <SponsorsCard planType="silver" logoImages={[]}/>
        <SponsorsCard planType="bronze" logoImages={[]}/>
      </Box> */}
      <Button text={t('consider_a_sponsor')} />
    </Box>
  )
}
