import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import { FC } from 'react'
import { Colors } from 'src/styles/color'
import { Box, Typography } from '@mui/material'
import { SponsorInfo } from 'src/modules/sponsors'

type Props = {
  planType: 'platinumGold' | 'gold' | 'silver' | 'bronze'
  sponsors: SponsorInfo[]
}

const getLayoutValuesByPlanType = (
  planType: Props['planType']
): {
  heading: string
  gridWidth: string
  columns: number
  columnWidth: {
    xs: number
    md: number
  }
} => {
  switch (planType) {
    case 'platinumGold':
      return {
        heading: 'Platinum "Go"ld',
        gridWidth: '100%',
        columns: 12,
        columnWidth: { xs: 12, md: 6 }
      }
    case 'gold':
      return {
        heading: '"Go"ld',
        gridWidth: '80%',
        columns: 12,
        columnWidth: { xs: 12, md: 6 }
      }
    case 'silver':
      return {
        heading: 'Silver',
        gridWidth: '100%',
        columns: 12,
        columnWidth: { xs: 6, md: 4 }
      }
    case 'bronze':
      return {
        heading: 'Bronze',
        gridWidth: '100%',
        columns: 15,
        columnWidth: { xs: 5, md: 3 }
      }
    default:
      throw new Error(`Invalid PlanType: ${planType}`)
  }
}

/**
 * Card arranged each sponsorship plan name and sponsors' logo image.
 * @param planType - 4 types of sponsorship plans:
 *  `platinumGold`
 *  `gold`
 *  `silver`
 *  `bronze`
 * @param sponsors - list of sponsor's information (uses `id` as `key`, `name` as `alt`, and `logo` as `src`).
 * @returns
 */
export const SponsorsCard: FC<Props> = ({ planType, sponsors }) => {
  const {
    heading,
    gridWidth,
    columns,
    columnWidth: { xs, md }
  } = getLayoutValuesByPlanType(planType)

  return (
    <Box bgcolor={Colors.background.primary} maxWidth={'1024px'} width={'100%'} borderRadius={5} p={{ xs: 3, md: 5 }}>
      <Typography variant="h3" align="center" mb={3}>
        {heading}
      </Typography>
      <Grid container spacing={{ xs: 1, md: 3 }} mx={'auto'} width={gridWidth} columns={columns}>
        {sponsors.map(({ id, name, logo }) => {
          return (
            <Grid xs={xs} md={md} key={id}>
              <Image src={logo} alt={name} quality={100} width="640px" height="360px" objectFit="contain" />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
