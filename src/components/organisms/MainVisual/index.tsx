import { Box } from '@mui/material'
import { useSize } from 'src/modules/hooks'
import { useReward } from 'react-rewards'
import { useEffect } from 'react'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? './Background-pc.png' : './Background-sp.png'
  const { reward: rewardLeft } = useReward('confettiLeft', 'confetti')
  const { reward: rewardRight } = useReward('confettiRight', 'confetti')

  useEffect(() => {
    rewardLeft()
    rewardRight()
  }, [rewardLeft, rewardRight])

  return (
    <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
      <img src={image_path} alt="main visual" style={{ width: '100%' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <span id="confettiLeft" />
        <span id="confettiRight" />
      </Box>
    </Box>
  )
}
