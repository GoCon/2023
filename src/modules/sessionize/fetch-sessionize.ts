import { type SessionizeViewAllSchemaType, sessionizeViewAllSchema } from './schema'

/**
 * Cache sessionize data.
 */
let sessionizeCache: SessionizeViewAllSchemaType | undefined = undefined

/**
 * Fetch sessionize data and cache it.
 */
export const fetchSessionize: () => Promise<SessionizeViewAllSchemaType> = async () => {
  if (sessionizeCache) {
    return sessionizeCache
  }
  const response = await fetch('https://sessionize.com/api/v2/3qcdixg4/view/All')
  const parsedResult = await sessionizeViewAllSchema.safeParseAsync(await response.json())

  if (!parsedResult.success) {
    throw new Error(`Failed to parse: ${parsedResult.error}`)
  }

  sessionizeCache = parsedResult.data
  return sessionizeCache
}
