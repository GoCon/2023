import { Box } from '@mui/material'
import { useInterval, useSize } from 'src/modules/hooks'
import { useReward } from 'react-rewards'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? './Background-pc.png' : './Background-sp.png'
  const { reward: rewardLeft, isAnimating: isAnimatingLeft } = useReward('confettiLeft', 'confetti', { angle: 60 })
  const { reward: rewardRight, isAnimating: isAnimatingRight } = useReward('confettiRight', 'confetti', { angle: 120 })

  useInterval(() => {
    if (!isAnimatingLeft || !isAnimatingRight) {
      rewardLeft()
      rewardRight()
    }
  })

  return (
    <>
      <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
        <img src={image_path} alt="main visual" style={{ width: '100%' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <span id="confettiLeft" />
        <span id="confettiRight" />
      </Box>
    </>
  )
}
