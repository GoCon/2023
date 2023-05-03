import type { FC } from 'react'
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
      position="relative"
    >
      <Typography variant="h2">Call for Speakers!</Typography>
      <Box mb={1}>
        <Typography variant="body2">{t('application_result_will_be_noticed')}</Typography>
      </Box>
      <a href="https://sessionize.com/go-conference-2023-online/" target="_blank">
        <Button text={t('check_cfp')} />
      </a>
    </Box>
  )
}
