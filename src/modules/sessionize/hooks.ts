import useSWR, { Fetcher } from 'swr'

const fetcher: Fetcher<string> = (url: string): Promise<any> => fetch(url).then(res => res.json())
export const useSessionize = () => {
  return useSWR(`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_ID}/view/All`, fetcher)
}
