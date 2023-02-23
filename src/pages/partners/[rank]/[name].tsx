import { GetStaticPaths, GetStaticProps } from 'next'
import { PagePartner, PartnerRank } from 'src/components/pages/PagePartner'

import partners from 'data/partners.json'

export type Rank = keyof typeof partners

type Props = {
  name: string
  desc: string
  rank: Extract<Rank, 'platinum' | 'gold'>
}

export const PartnerPage = (props: Props) => {
  return <PagePartner {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const platinumPartners = partners.platinum.map(p => ({ params: { rank: 'platinum', name: p.name } }))
  const goldPartners = partners.gold.map(p => ({ params: { rank: 'gold', name: p.name } }))

  return {
    paths: [...platinumPartners, ...goldPartners],
    fallback: false
  }
}

/**
 * partners.json から path params に対応した情報の抜き出し page の props として返す
 */
export const getStaticProps: GetStaticProps = async context => {
  const rank = context.params?.rank as Rank | undefined
  if (!rank) throw new Error('rank is required')
  if (rank !== 'platinum' && rank !== 'gold') throw new Error('invalid rank')

  const name = context.params?.name as string | undefined
  if (!name) throw new Error('name is required')

  const desc = partners[rank].find(p => p.name === name)?.desc
  if (!desc) throw new Error('desc is required')

  return {
    props: { name, rank, desc }
  }
}

export default PartnerPage
