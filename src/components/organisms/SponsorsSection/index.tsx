import type { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { SponsorsCard } from 'src/components/molecules/SponsorsCard'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'
import { Colors } from 'src/styles/color'
import SponsorsLogoSample from 'src/components/molecules/SponsorsCard/images/SponsorsLogoSample.png'

const sampleLogo = {
  image: SponsorsLogoSample,
  alt: 'Logo Sample'
}

export const SponsorsSection: FC = () => {
  const { t } = useTranslation()

  return (
    <Box
      bgcolor={Colors.background.secondary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mb={12.5}
      px={{ xs: 2 }}
    >
      <Typography variant="h1" mb={5} textAlign={'center'}>
        Sponsors
      </Typography>
      <Box gap={3} mb={5} display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'}>
        <SponsorsCard planType="platinumGold" logoImages={[sampleLogo, sampleLogo]} />
        <SponsorsCard planType="gold" logoImages={[sampleLogo, sampleLogo]} />
        <SponsorsCard
          planType="silver"
          logoImages={[sampleLogo, sampleLogo, sampleLogo, sampleLogo, sampleLogo, sampleLogo]}
        />
        <SponsorsCard
          planType="bronze"
          logoImages={[
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo,
            sampleLogo
          ]}
        />
      </Box>
      <Box mb={10}>
        <Button text={t('consider_a_sponsor')} />
      </Box>
    </Box>
  )
}
