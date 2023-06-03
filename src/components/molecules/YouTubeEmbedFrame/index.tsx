import { Box } from '@mui/material'
import { FC } from 'react'

type Props = {
  recordingUrl: string
}

export const YouTubeEmbedFrame: FC<Props> = ({ recordingUrl }) => {
  return (
    <Box sx={{ aspectRatio: '16/9', maxWidth: '680px', width: '100%', height: '100%' }}>
      <iframe
        src={recordingUrl}
        width="100%"
        height="100%"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: 'none' }}
      />
    </Box>
  )
}
