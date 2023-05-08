import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { Layout } from 'src/components/commons'
import { type SponsorInfo } from 'src/modules/sponsors'

type Props = Omit<SponsorInfo, 'id'>

export const PagePartner: NextPage<Props> = ({ name, logo, description }) => {
  return (
    <Layout>
      <Box sx={{ mx: '160px' }} display="flex" flexDirection="column">
        <Box sx={{ mt: '120px', py: '24px' }} display="flex">
          <Image src={logo} width={200} height={120} alt={name} />
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
