import type { NextPage } from 'next'
import { Layout } from 'src/components/commons'
import { useTranslation } from 'react-i18next'
import { useSessionize } from 'src/modules/sessionize/hooks'
import {
  MainVisual,
  TopDescription,
  SponsorsSection,
  CommunityBoothSection,
} from 'src/components/organisms'

export const PageTop: NextPage = () => {
  const { t } = useTranslation()

  // TODO(@maito1201): 取得したデータを基にセッションデータを表示する
  const { data } = useSessionize()
  console.log('session data', data)

  return (
    <Layout>
      <MainVisual />
      <TopDescription />
      <SponsorsSection />
      <CommunityBoothSection />
    </Layout>
  )
}
