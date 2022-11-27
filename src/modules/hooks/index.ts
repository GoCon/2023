import { useMediaQuery } from '@mui/material'
import { Theme } from '@mui/system'
import { useSyncExternalStore } from 'react'
import { useEffect, useRef } from 'react'

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

// ref: https://zenn.dev/akhr_s/articles/065e18ab3c4883
export const useInterval = (callback: () => void, interval: number = 1000, callImmediately: boolean = false) => {
  const callbackRef = useRef(() => {})

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    // call the function immediately after rendered
    callImmediately && callbackRef.current()
    const timerId = setInterval(() => callbackRef.current(), interval)
    return () => clearInterval(timerId)
  }, [interval, callImmediately])
}
