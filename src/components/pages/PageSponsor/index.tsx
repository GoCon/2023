import { Typography } from '@mui/material'
import Image from 'next/image'
import { Layout } from 'src/components/commons'
import { type SponsorInfo } from 'src/modules/sponsors'
import Grid from '@mui/material/Unstable_Grid2'
import { FC } from 'react'

type Props = Omit<SponsorInfo, 'id'>

export const PageSponsor: FC<Props> = ({ name, logo, description }) => {
  return (
    <Layout>
      <Grid container spacing={4} sx={{ maxWidth: '1024px', m: '128px auto 0', px: '16px' }}>
        <Grid xs={12} md={4} sx={{ position: 'relative', aspectRatio: '16/9' }}>
          <Image src={logo} fill alt={name} style={{ objectFit: 'contain' }} />
        </Grid>
        <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 0 }}>
            {name}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}
