import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { Layout } from 'src/components/commons'

export type PartnerRank = 'platinum' | 'gold'

type Props = {
  id: string
  name: string
  description: string
}

export const PagePartner = ({ id, name, description }: Props) => {
  return (
    <Layout>
      <Box sx={{ mx: '160px' }} display="flex" flexDirection="column">
        <Box sx={{ mt: '120px', py: '24px' }} display="flex">
          <Image src={`/2023/images/partners/${id}.png`} width={200} height={120} alt={id} />
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
