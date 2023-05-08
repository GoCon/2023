import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PagePartner } from 'src/components/pages/PagePartner'
import { type SponsorInfo, sponsors } from 'src/modules/sponsors'

type Props = Omit<SponsorInfo, 'id'>

type PathParams = {
  id: string
  rank: 'platinum' | 'gold'
}

export const PartnerPage: NextPage<Props> = props => {
  return <PagePartner {...props} />
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const { platinum, gold } = sponsors
  const platinumSponsorsParams = platinum.map(({ id }) => ({
    params: { rank: 'platinum' as const, id: id.toString() }
  }))
  const goldSponsorsParams = gold.map(({ id }) => ({
    params: { rank: 'gold' as const, id: id.toString() }
  }))

  return {
    paths: [...platinumSponsorsParams, ...goldSponsorsParams],
    fallback: false
  }
}

/**
 * partners.json から path params に対応した情報の抜き出し page の props として返す
 */
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.rank) {
    throw new Error(`rank is required : ${params}`)
  }
  if (params.rank !== 'platinum' && params.rank !== 'gold') {
    throw new Error('invalid rank')
  }
  if (!params.id || typeof params.id !== 'string') {
    throw new Error(`id is required : ${params}`)
  }

  const { rank, id } = params

  const matchedSponsor = sponsors[rank].find(sponsor => sponsor.id.toString() === id)
  if (!matchedSponsor) {
    throw new Error(`Sponsor's information did not found.`)
  }

  const { name, logo, description } = matchedSponsor

  return {
    props: { name, logo, description }
  }
}

export default PartnerPage
