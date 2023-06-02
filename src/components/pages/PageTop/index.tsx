import type { NextPage } from 'next'
import { Layout } from 'src/components/commons'
import {
  MainVisual,
  TopDescription,
  SponsorsSection,
  SpecialThanksSection,
  FinishedAnnouncementSection
} from 'src/components/organisms'

export const PageTop: NextPage = () => {
  return (
    <Layout>
      <MainVisual />
      <FinishedAnnouncementSection />
      <TopDescription />
      <SponsorsSection />
      <SpecialThanksSection />
    </Layout>
  )
}
