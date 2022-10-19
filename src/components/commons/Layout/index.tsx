import type { NextPage } from 'next'
import { ReactNode } from 'react'
import Head from 'next/head'
import { Header } from 'src/components/organisms'
import { Footer } from 'src/components/organisms'
import { Box, Input } from '@mui/material'
import useLocalStorageState from 'use-local-storage-state'

export interface LayoutProps {
  children: ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  const config = require('../../../../next.config')
  const [authorized, setAuthorized] = useLocalStorageState('authorized', { defaultValue: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === process.env.NEXT_PUBLIC_AUTH_PASSWORD) setAuthorized(true)
  }

  if (process.env.NEXT_PUBLIC_AUTH_PASSWORD && !authorized)
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
        <meta name="description" content="Go Conference is a half-annual conference of programming language Go." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
      </Box>
      <Box component="main" sx={{ minHeight: 'calc(100vh - 124px)', marginTop: '64px' }}>
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  )
}
