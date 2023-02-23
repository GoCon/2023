import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from 'src/components/commons'
import { Header } from 'src/components/organisms'

export type PartnerRank = 'platinum' | 'gold'

type PagePartnerProps = {
  name: string
  desc: string
  rank: PartnerRank
}

export const PagePartner = ({ name, desc, rank }: PagePartnerProps) => {
  return (
    <Layout>
      <Box sx={{ mx: '160px' }} display="flex" flexDirection="column">
        <Box sx={{ mt: '120px', py: '24px' }} display="flex">
          <Image src={`/2023/images/partners/${name}.png`} width={'200px'} height={'120px'} alt={name} />
          <Typography variant="h1" sx={{ ml: '24px', width: '100%', textAlign: 'center', alignContent: 'center' }}>
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">{desc}</Typography>
        </Box>
      </Box>
    </Layout>
  )
}
