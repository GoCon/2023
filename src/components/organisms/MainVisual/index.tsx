import { Box } from '@mui/material'
import { useSize } from 'src/modules/hooks'

export const MainVisual = () => {
  const { isTabletOrOver } = useSize()
  const image_path = isTabletOrOver ? './Background-pc.png' : './Background-sp.png'

  return (
    <Box sx={{ maxWidth: '1280px', margin: '0 auto' }}>
      <img src={image_path} alt="main visual" style={{ width: '100%' }} />
    </Box>
  )
}
