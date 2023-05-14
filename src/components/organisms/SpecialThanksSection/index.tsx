import type { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { Colors } from 'src/styles/color'
import Image from 'next/image'

export const SpecialThanksSection: FC = () => {
  return (
    <Box
      bgcolor={Colors.background.secondary}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      px={{ xs: 2 }}
      py={{ md: 10, xs: 4 }}
    >
      <Typography variant="h2" textAlign={'center'}>
        Special Thanks
      </Typography>
      <Box bgcolor={Colors.background.primary} maxWidth={'1024px'} width={'100%'} borderRadius={5} p={{ xs: 3, md: 5 }}>
        <Typography variant="body1" align="center">
          reBako.io powered by
        </Typography>
        <Box position="relative" sx={{ aspectRatio: '16/9', maxWidth: '384px', mx: 'auto' }}>
          <Image
            src={'special-thanks/sikmi.png'}
            alt={'しくみ製作所'}
            quality={100}
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
