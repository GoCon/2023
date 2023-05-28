import type { NextPage } from 'next'
import { Layout } from 'src/components/commons'
import { MainVisual, TopDescription, SponsorsSection } from 'src/components/organisms'
import { SpecialThanksSection } from 'src/components/organisms/SpecialThanksSection'

export const PageTop: NextPage = () => {
  return (
    <Layout>
      <MainVisual />
      <TopDescription />
      <SponsorsSection />
      <SpecialThanksSection />
    </Layout>
  )
}
