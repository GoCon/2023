import type { FC, ReactNode } from 'react'
import MuiLink from '@mui/material/Link'
import { Colors } from 'src/styles/color'

type Props = {
  href: string
  children: ReactNode
  color?: 'link' | 'primary' | 'secondary'
}

const { link, link_hover, primary, primary_hover, secondary, secondary_hover } = Colors.text

const getColors = (color: Props['color']) => {
  switch (color) {
    case 'link':
      return { defaultColor: link, hoverColor: link_hover }
    case 'primary':
      return { defaultColor: primary, hoverColor: primary_hover }
    case 'secondary':
      return { defaultColor: secondary, hoverColor: secondary_hover }
    default:
      throw new Error(`Invalid color: ${color}`)
  }
}

/**
 * Wrapped MUI’s Link component used for a link to an external page.
 *
 * Use `next/link` instead for a link to a page inside of the application.
 * @param href - URL for external page.
 * @param children - ReactNode
 * @param color - Set text color and hover color by `link`, `primary`, or `secondary`. Default as `link`.
 */
export const ExternalLink: FC<Props> = ({ href, children, color = 'link' }) => {
  const { defaultColor, hoverColor } = getColors(color)

  return (
    <MuiLink
      href={href}
      target="_blank"
      variant="inherit"
      sx={{
        color: defaultColor,
        textDecorationColor: defaultColor,
        ':hover': {
          color: hoverColor,
          textDecorationColor: hoverColor
        }
      }}
    >
      {children}
    </MuiLink>
  )
}
