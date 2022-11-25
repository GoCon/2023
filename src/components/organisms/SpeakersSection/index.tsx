import type { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'

// TODO: デザイン組み込み
export const SpeakersSection: FC = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Typography variant="h2">Wanted to Speakers!</Typography>
      <Link href="https://sessionize.com/go-conference-2023-online/">
        <a target="_blank">
          <Button text={t('apply_for_speaker')} onClick={() => console.log('clicked!')} />
        </a>
      </Link>
    </Box>
  )
}
