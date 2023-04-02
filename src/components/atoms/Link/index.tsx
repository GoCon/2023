import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import MuiLink from '@mui/material/Link'
import { ReactNode } from 'react'

export interface LinkProps {
  href: NextLinkProps['href']
  target?: string
  children?: ReactNode
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
