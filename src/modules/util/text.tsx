import { Fragment, ReactNode } from 'react'
import { Colors } from 'src/styles/color'

/**
 * Regular expression for parsing URLs.
 * Japanese and closing parentheses following the URL are not considered part of the URL
 */
const URL_REGEX: RegExp = /(https?:\/\/[^)\s\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]+)/gu

/** Maximum number of characters to display URL */
const MAX_URL_LENGTH: number = 24

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

type ReplaceUrlWithLinkOptions = {
  /** If true, the URL will be displayed in full length. Default as false */
  keepFullLength?: boolean
}
/**
 * Convert URL strings contained in text to links
 * @param text text
 */
export const replaceUrlWithLink: (text: string, options?: ReplaceUrlWithLinkOptions) => ReactNode = (
  text,
  options = {}
) => {
  const { keepFullLength = false } = options

  const parts = text.split(URL_REGEX)

  return parts.map((part, i) => {
    if (part.match(URL_REGEX)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: Colors.text.link, textDecoration: 'underline' }}
        >
          {keepFullLength ? part : shortenUrl(part)}
        </a>
      )
    } else {
      return <Fragment key={i}>{part}</Fragment>
    }
  })
}
