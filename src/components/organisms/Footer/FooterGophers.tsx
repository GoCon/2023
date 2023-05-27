import { Box } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'
import {
  GopherConductor,
  GopherDrummer,
  GopherTrumpeter,
  GopherPomPom,
  GopherFlowerBlue,
  GopherFlowerPink,
  GopherPartyPopper
} from 'src/images/gopher'
import { useReward } from 'react-rewards'
import { confettiColors } from 'src/styles/color'
import { useSize } from 'src/modules/hooks'

export const FooterGophers: FC = () => {
  const { isTabletOrOver } = useSize()
  const { reward } = useReward('confettiGopherPopper', 'confetti', {
    angle: 135,
    colors: confettiColors,
    position: 'absolute',
    startVelocity: 20
  })

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 0.5,
        width: '100%',
        padding: '64px 16px 16px',
        mt: 'auto'
      }}
    >
      <Image src={GopherConductor} alt="gopher conductor" style={{ minWidth: 0, objectFit: 'contain' }} />
      <Image src={GopherDrummer} alt="gopher drummer" style={{ minWidth: 0, objectFit: 'contain' }} />
      <Image src={GopherTrumpeter} alt="gopher trumpeter" style={{ minWidth: 0, objectFit: 'contain' }} />
      <Image src={GopherPomPom} alt="gopher pom pom" style={{ minWidth: 0, objectFit: 'contain' }} />
      <Image src={GopherFlowerBlue} alt="gopher flower blue" style={{ minWidth: 0, objectFit: 'contain' }} />
      {isTabletOrOver && (
        <>
          <Image src={GopherFlowerPink} alt="gopher flower pink" />
          <Box onClick={reward} sx={{ '&:hover': { cursor: 'pointer' } }}>
            <span id="confettiGopherPopper" />
            <Image src={GopherPartyPopper} alt="gopher party popper" />
          </Box>
        </>
      )}
    </Box>
  )
}
