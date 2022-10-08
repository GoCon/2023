import { Box, Container, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import { useSize } from 'src/modules/common/hooks'
import Image from 'next/image'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? '/Background-pc.png' : '/Background-sp.png'

  return (
    <Box>
      <Box
        sx={{ position: 'absolute', top: isTabletOrOver ? '170px' : '90px', left: isTabletOrOver ? '105px' : '35px' }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: isTabletOrOver ? '70px' : '43px',
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
            fontSize: isTabletOrOver ? '50px' : '43px',
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
            fontSize: isTabletOrOver ? '23px' : '21px',
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
            fontSize: isTabletOrOver ? '20px' : '16px',
            lineHeight: '100%',
            color: Colors.text.primary
          }}
        >
          -&emsp;Online&emsp;-
        </Typography>
      </Box>
      <img src={image_path} alt="main visual" style={{ width: '100%' }} />
    </Box>
  )
}
