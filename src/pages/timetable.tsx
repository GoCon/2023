import { GetStaticProps } from 'next'
import { PageTop } from 'src/components/pages'

const Index = () => {
  /* TODO: 各ページの実装 */
  return <PageTop />
}

// NOTE: next exportで静的ファイルとして生成するため空のpropsを宣言する
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Index
