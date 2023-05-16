import type { NextPage } from 'next'
import { Layout } from 'src/components/commons'
// import { useSessionize } from 'src/modules/sessionize/hooks'
import { MainVisual, TopDescription, SponsorsSection } from 'src/components/organisms'
import { SpecialThanksSection } from 'src/components/organisms/SpecialThanksSection'

export const PageTop: NextPage = () => {
  // TODO(@maito1201): 取得したデータを基にセッションデータを表示する
  // const { data } = useSessionize()
  // console.log('session data', data)

  return (
    <Layout>
      <MainVisual />
      <TopDescription />
      <SponsorsSection />
      <SpecialThanksSection />
    </Layout>
  )
}
