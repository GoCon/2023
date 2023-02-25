import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from 'src/components/commons'
import { Header } from 'src/components/organisms'

export type PartnerRank = 'platinum' | 'gold'

type PagePartnerProps = {
  id: string
  name: string
  description: string
}

export const PagePartner = ({ id, name, description }: PagePartnerProps) => {
  return (
    <Layout>
      <Box sx={{ mx: '160px' }} display="flex" flexDirection="column">
        <Box sx={{ mt: '120px', py: '24px' }} display="flex">
          <Image src={`/2023/images/partners/${id}.png`} width={'200px'} height={'120px'} alt={id} />
          <Typography variant="h1" sx={{ ml: '24px', width: '100%', textAlign: 'center', alignContent: 'center' }}>
            {name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Box>
    </Layout>
  )
}
