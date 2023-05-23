import config from '../../../../next.config'
import type { NextPage } from 'next'
import { ReactNode, ChangeEvent } from 'react'
import Head from 'next/head'

import { Header } from 'src/components/organisms'
import { Footer } from 'src/components/organisms'
import { toSha256 } from 'src/modules/util/hash'

import { Box, Input } from '@mui/material'
import useLocalStorageState from 'use-local-storage-state'

export interface LayoutProps {
  children: ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  const [authorized, setAuthorized] = useLocalStorageState('authorized', { defaultValue: false })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (toSha256(e.target.value) === process.env.NEXT_PUBLIC_AUTH_PASSWORD_HASH) setAuthorized(true)
  }

  if (process.env.NEXT_PUBLIC_AUTH_PASSWORD_HASH && !authorized)
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box>
          <Input onChange={handleChange} placeholder="enter password" />
        </Box>
      </Box>
    )

  return (
    <>
      <Head>
        <title>Go Conference 2023</title>
        <base href={config.basePath + '/'} />
        <link rel="icon" href={config.basePath + '/favicon.ico'} />
        <meta name="description" content="Go Conference is a conference for Go programming language users." />
        <meta property="og:site_name" content="Go Conference 2023" />
        <meta property="og:title" content="Go Conference 2023" />
        <meta property="og:description" content="Go Conference is a conference for Go programming language users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gocon.jp/2023" />
        <meta property="og:image" content="https://gocon.jp/2023/ogp-thumbnail.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box>
        <Header />
      </Box>
      <Box component="main" sx={{ minHeight: 'calc(100vh - 300px)' }}>
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  )
}
