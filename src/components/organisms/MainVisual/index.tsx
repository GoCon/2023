import { Box } from '@mui/material'
import { useInterval, useSize } from 'src/modules/hooks'
import { useReward } from 'react-rewards'
import { confettiColors } from 'src/styles/color'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? './Background-pc.png' : './Background-sp.png'
  const confettiLeftConfig = {
    angle: 45,
    colors: confettiColors,
    elementCount: isTabletOrOver ? 100 : 50,
    position: 'absolute'
  }
  const confettiRightConfig = {
    angle: 135,
    colors: confettiColors,
    elementCount: isTabletOrOver ? 100 : 50,
    position: 'absolute'
  }
  const { reward: rewardTopLeft, isAnimating: isAnimatingTopLeft } = useReward(
    'confettiTopLeft',
    'confetti',
    confettiLeftConfig
  )
  const { reward: rewardTopRight, isAnimating: isAnimatingTopRight } = useReward(
    'confettiTopRight',
    'confetti',
    confettiRightConfig
  )
  const { reward: rewardBottomLeft, isAnimating: isAnimatingBottomLeft } = useReward(
    'confettiBottomLeft',
    'confetti',
    confettiLeftConfig
  )
  const { reward: rewardBottomRight, isAnimating: isAnimatingBottomRight } = useReward(
    'confettiBottomRight',
    'confetti',
    confettiRightConfig
  )

  useInterval(
    () => {
      if (!isAnimatingTopLeft || !isAnimatingTopRight || !isAnimatingBottomLeft || !isAnimatingBottomRight) {
        rewardTopLeft()
        rewardTopRight()
        rewardBottomLeft()
        rewardBottomRight()
      }
    },
    4000,
    true // call the function immediately after rendered
  )

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box id="confettiTopLeft" sx={{ position: 'absolute', left: '32px' }} />
        <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
          <img src={image_path} alt="main visual" style={{ width: '100%' }} />
        </Box>
        <Box id="confettiTopRight" sx={{ position: 'absolute', right: '32px' }} />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box id="confettiBottomLeft" sx={{ position: 'absolute', left: '32px' }} />
        <Box id="confettiBottomRight" sx={{ position: 'absolute', right: '32px' }} />
      </Box>
    </Box>
  )
}
