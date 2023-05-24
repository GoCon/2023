import { GetStaticProps } from 'next'
import { PageSessions } from 'src/components/pages'

const Index = () => {
  return <PageSessions />
}

// NOTE: next exportで静的ファイルとして生成するため空のpropsを宣言する
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Index
