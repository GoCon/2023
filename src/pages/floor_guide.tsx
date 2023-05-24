import { GetStaticProps } from 'next'

import { PageFloorGuide } from 'src/components/pages'

const Index = () => {
  return <PageFloorGuide />
}

// NOTE: next exportで静的ファイルとして生成するため空のpropsを宣言する
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Index
