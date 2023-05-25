import { Typography, TypographyProps } from '@mui/material'
import Autolinker from 'autolinker'
import { JSDOM } from 'jsdom'
import DOMPurify from 'dompurify'
import { FC } from 'react'
import { Colors } from 'src/styles/color'

const window = new JSDOM('').window
const purify = DOMPurify(window)

type Props = Pick<TypographyProps, 'variant' | 'sx'> & {
  content: string
  truncateLength?: number
}

export const LinkParser: FC<Props> = ({ content, truncateLength = 32, variant = 'body2', sx }) => {
  return (
    <Typography
      variant={variant}
      sx={sx}
      dangerouslySetInnerHTML={{
        __html: purify.sanitize(
          Autolinker.link(content, {
            truncate: { length: truncateLength },
            stripPrefix: false,
            replaceFn: match => {
              const tag = match.buildTag()
              tag.setAttr('style', `color: ${Colors.text.link}`)
              return tag
            }
          })
        )
      }}
    />
  )
}
