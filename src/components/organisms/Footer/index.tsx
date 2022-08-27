import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'

export const footerHeight = 60

export const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      width: '100%',
      height: footerHeight,
      backgroundColor: Colors.background.darken_1,
      p: 1.5
    }}
  >
    <Typography variant='caption' color={Colors.text.secondary}>
      {`Gopherの原著作者はRenée Frenchさんです。 Original Creator of 'Gopher' is Renée French.`}
    </Typography>
  </Box>
)