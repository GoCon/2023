import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/system'
import { useSyncExternalStore } from 'react'

export const useSize = () => {
  const isPCOrOver = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
  const isTabletOrOver = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  return { isPCOrOver, isTabletOrOver }
}

export function useScrollY(): number {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY,
    () => 0
  )
}

function subscribeScroll(callback: () => void): () => void {
  window.addEventListener('scroll', callback)
  return () => {
    window.removeEventListener('scroll', callback)
  }
}
