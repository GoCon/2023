import type { NextPage } from 'next'
import { Layout } from 'src/components/commons'
import { useTranslation } from 'react-i18next'
import {
  MainVisual,
  TopDescription,
  SponsorsSection,
  CommunityBoothSection,
  SpeakersSection
} from 'src/components/organisms'

export const PageTop: NextPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <MainVisual />
      <TopDescription />
      <SpeakersSection />
      <SponsorsSection />
      <CommunityBoothSection />
    </Layout>
  )
}
