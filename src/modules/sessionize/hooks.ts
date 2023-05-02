import useSWR from 'swr'
import { sessionizeViewAllSchema, SessionizeViewAllSchemaType } from './schema'

const fetcher = (url: string): Promise<SessionizeViewAllSchemaType> => fetch(url).then(res => res.json())
export const useSessionize = (): SessionizeViewAllSchemaType | null => {
  const { data, error } = useSWR(
    `https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_ID}/view/All`,
    fetcher
  )

  if (error) {
    console.error(error)
    return null
  }
  if (!data) {
    return null
  }

  const parsedResult = sessionizeViewAllSchema.safeParse(data)
  if (!parsedResult.success) {
    console.error(parsedResult.error)
    return null
  }

  return parsedResult.data
}
