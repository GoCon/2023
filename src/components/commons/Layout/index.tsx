import type { NextPage } from 'next'
import { ReactNode } from 'react'
import Head from 'next/head'
import { Header } from 'src/components/organisms'
import { Footer } from 'src/components/organisms'
import { Box } from '@mui/material'

export interface LayoutProps {
  children: ReactNode
}

export const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Go Conference 2023</title>
        <meta name='description' content='Go Conference is a half-annual conference of programming language Go.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Header />
      </Box>
      <Box component='main' sx={{ minHeight: 'calc(100vh - 120px)' }}>
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  )
}