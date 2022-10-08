import { Box, Container, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useSize } from 'src/modules/common/hooks'
import Image from 'next/image'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? '/Background-pc.png' : '/Background-sp.png'

  return (
    <Container sx={{ position: 'relative', width: '100%', height: isTabletOrOver ? '845px' : '512px' }}>
      <Box sx={{ position: 'absolute', zIndex: '1', top: isTabletOrOver ? '115px' : '0px' }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: isTabletOrOver ? '110px' : '43px',
            lineHeight: '100%',
            letterSpacing: '5px',
            color: Colors.text.primary
          }}
        >
          Go Conference
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: isTabletOrOver ? '90px' : '43px',
            lineHeight: '100%',
            letterSpacing: '6px',
            color: Colors.text.primary
          }}
        >
          2023
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: isTabletOrOver ? '63px' : '21px',
            lineHeight: '100%',
            color: Colors.text.primary
          }}
        >
          June 2nd Fri
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: isTabletOrOver ? '40px' : '16px',
            lineHeight: '100%',
            color: Colors.text.primary
          }}
        >
          -&emsp;Online&emsp;-
        </Typography>
      </Box>
      <Image src={image_path} layout={'fill'} objectFit="cover" alt="main visual" />
    </Container>
  )
}
