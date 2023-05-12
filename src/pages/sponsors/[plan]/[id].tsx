import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PageSponsor } from 'src/components/pages/PageSponsor'
import { type SponsorInfo, sponsors } from 'src/modules/sponsors'

type Props = Omit<SponsorInfo, 'id'>

type PathParams = {
  id: string
  plan: 'platinum' | 'gold'
}

export const Page: NextPage<Props> = props => {
  return <PageSponsor {...props} />
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const { platinum, gold } = sponsors
  const platinumSponsorsParams = platinum.map(({ id }) => ({
    params: { plan: 'platinum' as const, id: id.toString() }
  }))
  const goldSponsorsParams = gold.map(({ id }) => ({
    params: { plan: 'gold' as const, id: id.toString() }
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
  if (!params || !params.plan) {
    throw new Error(`plan is required : ${params}`)
  }
  if (params.plan !== 'platinum' && params.plan !== 'gold') {
    throw new Error('invalid plan')
  }
  if (!params.id || typeof params.id !== 'string') {
    throw new Error(`id is required : ${params}`)
  }

  const { plan, id } = params

  const matchedSponsor = sponsors[plan].find(sponsor => sponsor.id.toString() === id)
  if (!matchedSponsor) {
    throw new Error(`Sponsor's information did not found.`)
  }

  const { name, logo, description } = matchedSponsor

  return {
    props: { name, logo, description }
  }
}

export default Page
