import dayjs from 'dayjs'
import {
  CATEGORY_SESSION_LEVEL,
  CATEGORY_SESSION_TYPE,
  QUESTION_SESSION_NUMBER,
  SessionizeCategorySchemaType,
  SessionizeRoomSchemaType,
  SessionizeSessionSchemaType,
  SessionizeSpeakerSchemaType
} from './schema'

/**
 * Get single session data from all sessions find by a sessionId.
 * @param sessions - list of all sessions data fetched from Sessionize API.
 * @param sessionId - ID of a session. In the sessions/[id], set params.id as sessionId.
 */
export const getSession = (sessions: SessionizeSessionSchemaType[], sessionId: string): SessionizeSessionSchemaType => {
  const session = sessions.find(
    ({ questionAnswers }) =>
      questionAnswers.find(({ questionId }) => questionId === QUESTION_SESSION_NUMBER)?.answerValue === sessionId
  )

  if (!session) {
    throw new Error(`No sessions found.`)
  }

  return session
}

/**
 * Get ID of a session such as 'A3-L', 'B4-S', etc.
 * @param questionAnswers - list of the set of a question and an answer belongs to each session.
 */
export const getSessionId = (questionAnswers: SessionizeSessionSchemaType['questionAnswers']) => {
  const questionForSessionId = questionAnswers.find(q => q.questionId === QUESTION_SESSION_NUMBER)
  if (!questionForSessionId) {
    throw new Error(`Invalid question: ${questionForSessionId}`)
  }

  return questionForSessionId.answerValue
}

/**
 * Get single room data from all rooms find by a roomId.
 * @param rooms - list of all rooms data fetched from Sessionize API.
 * @param roomId - ID of a room belongs to each session.
 */
export const getRoom = (rooms: SessionizeRoomSchemaType[], roomId: number): SessionizeRoomSchemaType => {
  const room = rooms.find(({ id }) => id === roomId)

  if (!room) {
    throw new Error(`Invalid roomId: ${roomId}`)
  }

  return room
}

/**
 * Get the level of a session such as 'beginner', 'intermediate', or 'advanced', etc., from all categories find by categoryItems.
 * @param categories - list of all categories data fetched from Sessionize API.
 * @param categoryItems - list of category items belongs to each session.
 * @returns - return the name of the level if it found, but if couldn't, return null.
 */
export const getSessionLevel = (
  categories: SessionizeCategorySchemaType[],
  categoryItems: SessionizeSessionSchemaType['categoryItems']
): string | null => {
  const sessionLevels = categories.find(({ id }) => id === CATEGORY_SESSION_LEVEL)?.items
  const sessionLevel = sessionLevels?.find(({ id }) => id === categoryItems[1])?.name ?? null

  return sessionLevel
}

/**
 * Get the type of a session such as 'Long Talk(40min)', 'Short Talk(20min)', or 'LT(5min)', etc., from all categories find by categoryItems.
 * @param categories - list of all categories data fetched from Sessionize API.
 * @param categoryItems - list of category items belongs to each session.
 * @returns - return the name of the type if it found, but if couldn't, return null.
 */
export const getSessionType = (
  categories: SessionizeCategorySchemaType[],
  categoryItems: SessionizeSessionSchemaType['categoryItems']
): string | null => {
  const sessionTypes = categories.find(({ id }) => id === CATEGORY_SESSION_TYPE)?.items
  const sessionType = sessionTypes?.find(({ id }) => id === categoryItems[0])?.name ?? null

  return sessionType
}

/**
 * Get single speaker data from all speakers find by a speakerId.
 * @param speakers - list of all speakers data fetched from Sessionize API.
 * @param speakerId - the first ID from the list of speaker's ID belongs to each session.
 */
export const getSpeaker = (
  speakers: SessionizeSpeakerSchemaType[],
  speakerId: SessionizeSessionSchemaType['speakers'][0]
): SessionizeSpeakerSchemaType => {
  const speaker = speakers.find(({ id }) => id === speakerId)

  if (!speaker) {
    throw new Error(`Invalid speakerId: ${speakerId}`)
  }

  return speaker
}

/**
 * Get the link to create an event to Google Calendar by formatting data of a session.
 * @param startsAt - date and time when the session starts.
 * @param endsAt - date and time when the session ends.
 * @param title - title of the session.
 * @param description - description of the session.
 */
export const getGoogleCalendarEventCreationLink = (
  startsAt: string,
  endsAt: string,
  title: string,
  description: string
): string => {
  const calendarDateFormat = 'YYYYMMDD[T]HHmmss'
  const calendarDatesParam = `${dayjs(startsAt).format(calendarDateFormat)}/${dayjs(endsAt).format(calendarDateFormat)}`
  const googleCalendarEventCreationLink = `http://www.google.com/calendar/event?action=TEMPLATE&text=${title}&details=${description}&dates=${calendarDatesParam}`

  return googleCalendarEventCreationLink
}

/**
 * Get a user name of Twitter from the list of links.
 * @param links - list of links belongs to each speaker.
 */
export const getTwitterUserName = (links: SessionizeSpeakerSchemaType['links']): string | null => {
  const twitterLinkObj = links.find(({ linkType }) => linkType === 'Twitter')

  if (!twitterLinkObj) {
    return null
  }

  const userName = twitterLinkObj.url.replace('https://twitter.com/', '')

  return userName
}

/**
 * Formats speaker's name to the correct to display.
 * If the name is Japanese, return the name in order of last name to first name.
 * If the last name is 'N/A' like the handle name, return only the first name.
 * @param firstName - speaker.firstName from Sessionize API.
 * @param lastName  - speaker.lastName from Sessionize API.
 */
export const formatSpeakerName = (firstName: string, lastName: string): string => {
  const japaneseUnicodeProperty = /^[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]*$/u
  const isJapanese: boolean = japaneseUnicodeProperty.test(lastName)
  if (isJapanese) {
    return `${lastName} ${firstName}`
  }
  if (lastName === 'N/A') {
    return `${firstName}`
  }
  return `${firstName} ${lastName}`
}
