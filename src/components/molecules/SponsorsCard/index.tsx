import Grid from '@mui/material/Unstable_Grid2'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Colors } from 'src/styles/color'
import { Box, Typography } from '@mui/material'

type Props = {
  planType: 'platinumGold' | 'gold' | 'silver' | 'bronze'
  logoImages: { image: StaticImageData; alt: string }[]
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
 * @param logoImages - list for set of StaticImageData and alt string.
 * @returns
 */
export const SponsorsCard: FC<Props> = ({ planType, logoImages }) => {
  const {
    heading,
    gridWidth,
    columns,
    columnWidth: { xs, md }
  } = getLayoutValuesByPlanType(planType)

  return (
    <Box bgcolor={Colors.background.primary} maxWidth={'1024px'} width={'100%'} borderRadius={5} p={{ xs: 3, md: 5 }}>
      <Typography variant="h3" align="center" mb={3} fontWeight={600} color={Colors.text.primary}>
        {heading}
      </Typography>
      <Grid container spacing={{ xs: 1, md: 3 }} mx={'auto'} width={gridWidth} columns={columns}>
        {logoImages.map(({ image, alt }, index) => {
          return (
            <Grid xs={xs} md={md} key={`${image}${alt}${index}`}>
              <Image src={image} layout="responsive" alt={alt} quality={100} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
