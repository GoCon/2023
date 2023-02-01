import type { FC } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { Button } from 'src/components/atoms'
import { useTranslation } from 'react-i18next'
import { Colors } from 'src/styles/color'

export const CommunityBoothSection: FC = () => {
  const { t } = useTranslation()

  return (
    <Box
      bgcolor={Colors.background.primary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mb={{ md: 12.5, xs: 7.5 }}
      px={{ xs: 2 }}
      py={{ md: 10, xs: 4 }}
    >
      <Typography variant="h2" textAlign={'center'}>
        Community Booth
      </Typography>
      <Typography variant="body1" mb={{ md: 5, xs: 2 }}>
        {t('community_booth_description')}
      </Typography>
      <Link href="https://drive.google.com/file/d/1QUr1BWF7Mu1vU40UieBcvkMf5B-tAf91/view?usp=share_link">
        <a target="_blank">
          <Button text={t('consider_a_community_booth')} />
        </a>
      </Link>
    </Box>
  )
}
