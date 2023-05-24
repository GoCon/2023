import useSWR from 'swr'
import {
  CATEGORY_SESSION_LEVEL,
  CATEGORY_SESSION_TYPE,
  QUESTION_SESSION_NUMBER,
  sessionizeViewAllSchema,
  type SessionizeViewAllSchemaType
} from './schema'
import { useCallback, useEffect, useMemo, useState } from 'react'

const fetcher = (url: string): Promise<SessionizeViewAllSchemaType> => fetch(url).then(res => res.json())

export type RoomName = SessionizeViewAllSchemaType['rooms'][0]['name']
export type SpeakerInfo = SessionizeViewAllSchemaType['speakers'][0]
export type SessionInfo = SessionizeViewAllSchemaType['sessions'][0]

type ReturnType = {
  data: SessionizeViewAllSchemaType | undefined
  isError: boolean
  isLoading: boolean
  getRoomName: (roomId: number) => RoomName
  getSessionNumber: (session: SessionInfo) => string
  getSpeaker: (speakerId: string) => SpeakerInfo
  getSessionLevel: (session: SessionInfo) => string
  getSessionType: (session: SessionInfo) => string
}

export const useSessionize = (): ReturnType => {
  const [parsedResult, setParsedResult] = useState<SessionizeViewAllSchemaType | undefined>(undefined)
  const { data, error, isLoading } = useSWR(
    `https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_ID}/view/All`,
    fetcher
  )

  useEffect(() => {
    if (!data) return

    const parsed = sessionizeViewAllSchema.safeParse(data)
    if (!parsed.success) {
      console.error(parsed.error)
    } else {
      setParsedResult(parsed.data)
    }
  }, [data])

  const sessionTypes = useMemo(() => {
    const category = parsedResult?.categories.find(c => c.id === CATEGORY_SESSION_TYPE)
    return category?.items ?? []
  }, [parsedResult?.categories])

  const sessionLevels = useMemo(() => {
    const category = parsedResult?.categories.find(c => c.id === CATEGORY_SESSION_LEVEL)
    return category?.items ?? []
  }, [parsedResult?.categories])

  /**
   * Get the name of the room with the given ID.
   */
  const getRoomName: ReturnType['getRoomName'] = useCallback(
    roomId => {
      const roomName = parsedResult?.rooms.find(room => room.id === roomId)?.name
      if (!roomName) {
        throw new Error(`Invalid roomId: ${roomId}`)
      }
      return roomName
    },
    [parsedResult?.rooms]
  )

  /**
   * Get the session ID from the given session.
   */
  const getSessionNumber: ReturnType['getSessionNumber'] = useCallback(session => {
    const sessionNum = session.questionAnswers.find(q => q.questionId === QUESTION_SESSION_NUMBER)
    if (!sessionNum) {
      throw new Error(`Invalid session: ${session}`)
    }
    return sessionNum.answerValue
  }, [])

  /**
   * Get the speaker info from the given session.
   */
  const getSpeaker: ReturnType['getSpeaker'] = useCallback(
    speakerId => {
      const speaker = parsedResult?.speakers.find(s => s.id === speakerId)
      if (!speaker) {
        throw new Error(`Invalid speakerId: ${speakerId}`)
      }
      return speaker
    },
    [parsedResult?.speakers]
  )

  /**
   * Get the session type from the given session.
   */
  const getSessionType: ReturnType['getSessionType'] = useCallback(
    session => {
      const sessionTypeId = session.categoryItems[0]
      const sessionType = sessionTypes.find(c => c.id === sessionTypeId)
      return sessionType?.name ?? ''
    },
    [sessionTypes]
  )

  /**
   * Get the session level from the given session.
   */
  const getSessionLevel: ReturnType['getSessionLevel'] = useCallback(
    session => {
      const sessionLevelId = session.categoryItems[1]
      const level = sessionLevels.find(c => c.id === sessionLevelId)
      return level?.name ?? ''
    },
    [sessionLevels]
  )

  return {
    data: parsedResult,
    isError: !!error,
    isLoading,
    getRoomName,
    getSessionNumber,
    getSpeaker,
    getSessionLevel,
    getSessionType
  }
}
