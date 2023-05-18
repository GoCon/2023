import { Box } from '@mui/material'
import { useInterval, useSize } from 'src/modules/hooks'
import { useReward } from 'react-rewards'
import { confettiColors } from 'src/styles/color'
import Image from 'next/image'
import { KeyVisualWithTextPc, KeyVisualWithTextMobile } from './images'
import { useEffect, useState } from 'react'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const keyVisualWithText = isTabletOrOver ? KeyVisualWithTextPc : KeyVisualWithTextMobile
  const confettiLeftConfig = {
    angle: 45,
    colors: confettiColors,
    elementSize: 12,
    position: 'absolute'
  }
  const confettiRightConfig = {
    angle: 135,
    colors: confettiColors,
    elementSize: 12,
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

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

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
        <Box
          sx={{
            width: '100%',
            maxWidth: '1440px',
            aspectRatio: { xs: '748/1114', sm: '1440/845' },
            margin: '0 auto'
          }}
        >
          {mounted && (
            <Image
              src={keyVisualWithText}
              alt="Go Conference 2023 Online at Friday, June Second"
              style={{
                width: '100%',
                height: 'auto',
                verticalAlign: 'middle',
                objectFit: 'contain'
              }}
              quality={100}
              priority
            />
          )}
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
