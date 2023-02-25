import { GetStaticPaths, GetStaticProps } from 'next'
import { PagePartner, PartnerRank } from 'src/components/pages/PagePartner'

import partners from 'data/partners.json'

export type Rank = keyof typeof partners

type PageProps = {
  id: string
  name: string
  description: string
  rank: Extract<Rank, 'platinum' | 'gold'>
}

export const PartnerPage = (props: PageProps) => {
  return <PagePartner {...props} />
}

type PathProps = Pick<PageProps, 'id' | 'rank'>

export const getStaticPaths: GetStaticPaths<PathProps> = async () => {
  const platinumPartners = partners.platinum.map(p => ({ params: { rank: 'platinum' as const, id: p.id } }))
  const goldPartners = partners.gold.map(p => ({ params: { rank: 'gold' as const, id: p.id } }))

  return {
    paths: [...platinumPartners, ...goldPartners],
    fallback: false
  }
}

/**
 * partners.json から path params に対応した情報の抜き出し page の props として返す
 */
export const getStaticProps: GetStaticProps<PageProps> = async context => {
  const rank = context.params?.rank as Rank | undefined
  if (!rank) throw new Error(`rank is required : ${context.params}`)
  if (rank !== 'platinum' && rank !== 'gold') throw new Error('invalid rank')

  const id = context.params?.id as string | undefined
  if (!id) throw new Error(`id is required : ${context.params}`)

  const { name, description } = partners[rank].find(p => p.id === id) ?? {}
  if (!name) throw new Error(`name is required : ${context.params}`)
  if (!description) throw new Error(`description is required : ${context.params}`)

  return {
    props: { id, name, rank, description }
  }
}

export default PartnerPage
