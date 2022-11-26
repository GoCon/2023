import type { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'
import { Colors } from 'src/styles/color'

export const SpeakersSection: FC = () => {
  const { t } = useTranslation()

  return (
    <Box
      bgcolor={Colors.background.primary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      py={{ md: 10, xs: 4 }}
    >
      <Typography variant="h1" mb={5}>
        Wanted to Speakers!
      </Typography>
      <Box mb={1}>
        <Typography>{t('application_started')}: 2022.12.01 Thu</Typography>
        <Typography>{t('application_closed')}: 2023.01.31 Sat</Typography>
      </Box>
      <Link href="https://sessionize.com/go-conference-2023-online/">
        <a target="_blank">
          <Button text={t('apply_for_speaker')} />
        </a>
      </Link>
    </Box>
  )
}
