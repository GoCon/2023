import { Typography, Box } from '@mui/material'
import { ReactNode } from 'react'
import { Colors } from 'src/styles/color'

// Regular expression for parsing URLs (excluding closing parentheses at the end)
const URL_REGEX: RegExp = /(https?:\/\/[^)\s)]+)/g

/**
 * Convert URL strings contained in text to links
 * @param text text
 */
const replaceUrlWithLink: (text: string) => ReactNode = text => {
  const parts = text.split(URL_REGEX)

  return parts.map((part, i) => {
    if (part.match(URL_REGEX)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: Colors.text.link }}>
          {shortenUrl(part)}
        </a>
      )
    } else {
      return <>{part}</>
    }
  })
}

const MAX_URL_LENGTH = 24

/**
 * Remove the protocol part from the URL string, and if the length of the entire URL string exceeds 32 characters, replace the 32nd character and beyond with "..."
 * @param url URL string
 */
const shortenUrl: (url: string) => string = url => {
  const protocolRemoved = url.replace(/(https?:\/\/)/, '')
  if (protocolRemoved.length > MAX_URL_LENGTH) {
    return protocolRemoved.slice(0, MAX_URL_LENGTH) + '...'
  } else {
    return protocolRemoved
  }
}

export interface BoothCardProps {
  title: string
  description: string
}

export const BoothCard = ({ title, description }: BoothCardProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} py={4}>
      <Typography variant="h3">{title}</Typography>
      <Typography
        variant="body2"
        sx={{ mb: '24px', maxWidth: '680px', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
      >
        {replaceUrlWithLink(description)}
      </Typography>
    </Box>
  )
}
