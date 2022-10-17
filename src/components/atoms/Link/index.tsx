import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import MuiLink from '@mui/material/Link'

export interface LinkProps {
  href: NextLinkProps['href']
  target?: string
  children?: React.ReactNode
}

export const Link = ({ href, target = '_self', children }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink target={target} rel="noreferrer noopener" underline="none">
        {children}
      </MuiLink>
    </NextLink>
  )
}
