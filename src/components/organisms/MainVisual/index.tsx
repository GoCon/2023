import { Box } from '@mui/material'
import { useInterval, useSize } from 'src/modules/hooks'
import { useReward } from 'react-rewards'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? './Background-pc.png' : './Background-sp.png'
  const { reward: rewardTopLeft, isAnimating: isAnimatingTopLeft } = useReward('confettiTopLeft', 'confetti', {
    angle: 45
  })
  const { reward: rewardTopRight, isAnimating: isAnimatingTopRight } = useReward('confettiTopRight', 'confetti', {
    angle: 135
  })
  const { reward: rewardBottomLeft, isAnimating: isAnimatingBottomLeft } = useReward('confettiBottomLeft', 'confetti', {
    angle: 45
  })
  const { reward: rewardBottomRight, isAnimating: isAnimatingBottomRight } = useReward(
    'confettiBottomRight',
    'confetti',
    { angle: 135 }
  )

  useInterval(() => {
    if (!isAnimatingTopLeft || !isAnimatingTopRight || !isAnimatingBottomLeft || !isAnimatingBottomRight) {
      rewardTopLeft()
      rewardTopRight()
      rewardBottomLeft()
      rewardBottomRight()
    }
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span id="confettiTopLeft" />
        <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
          <img src={image_path} alt="main visual" style={{ width: '100%' }} />
        </Box>
        <span id="confettiTopRight" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <span id="confettiBottomLeft" />
        <span id="confettiBottomRight" />
      </Box>
    </Box>
  )
}
