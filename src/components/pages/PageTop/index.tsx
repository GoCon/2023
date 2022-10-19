import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Button } from 'src/components/atoms'
import { Layout } from 'src/components/commons'
import { useTranslation } from 'react-i18next'
import { MainVisual } from 'src/components/organisms/MainVisual'
import { TopDescription } from 'src/components/organisms/TopDescription'

export const PageTop: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <MainVisual />
      <TopDescription />
      <Typography variant="h2">Wanted to Speakers!</Typography>
      <Box>
        <Button text={t('apply_for_speaker')} onClick={() => console.log('clicked!')} />
      </Box>
      <Typography variant="h2">Sponsors</Typography>
      <Box>
        <Button text={t('consider_a_sponsor')} />
      </Box>
    </Layout>
  )
}
