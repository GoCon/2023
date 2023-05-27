import { z } from 'zod'

const sessionizeSessionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  startsAt: z.string(),
  endsAt: z.string(),
  isServiceSession: z.boolean(),
  isPlenumSession: z.boolean(),
  speakers: z.array(z.string()),
  categoryItems: z.array(z.number()),
  questionAnswers: z.array(
    z.object({
      questionId: z.number(),
      answerValue: z.string()
    })
  ),
  roomId: z.number(),
  liveUrl: z.null(),
  recordingUrl: z.null(),
  status: z.literal('Accepted')
})

const sessionizeSpeakerSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  bio: z.string(),
  tagLine: z.string(),
  profilePicture: z.string(),
  isTopSpeaker: z.boolean(),
  links: z.array(
    z.object({
      linkType: z.string(),
      title: z.string(),
      url: z.string()
    })
  ),
  sessions: z.array(z.number()),
  fullName: z.string(),
  categoryItems: z.array(z.number()),
  questionAnswers: z.array(z.string())
})

const sessionizeCategorySchema = z.object({
  id: z.number(),
  title: z.string(),
  items: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      sort: z.number()
    })
  ),
  sort: z.number(),
  type: z.literal('session')
})

const sessionizeRoomSchema = z.object({
  id: z.number(),
  name: z.union([z.literal('Room A'), z.literal('Room B')]),
  sort: z.number()
})

/**
 * Zod schema object for parsing the response from Sessionize's "View All" API.
 */
export const sessionizeViewAllSchema = z.object({
  sessions: z.array(sessionizeSessionSchema),
  speakers: z.array(sessionizeSpeakerSchema),
  questions: z.array(z.any()),
  categories: z.array(sessionizeCategorySchema),
  rooms: z.array(sessionizeRoomSchema)
})

/**
 * Type definition for the parsed response from Sessionize's "View All" API.
 */
export type SessionizeViewAllSchemaType = z.infer<typeof sessionizeViewAllSchema>
/**
 * Type definition for each session.
 */
export type SessionizeSessionSchemaType = z.infer<typeof sessionizeSessionSchema>
/**
 * Type definition for each speaker.
 */
export type SessionizeSpeakerSchemaType = z.infer<typeof sessionizeSpeakerSchema>
/**
 * Type definition for each category.
 */
export type SessionizeCategorySchemaType = z.infer<typeof sessionizeCategorySchema>
/**
 * Type definition for each room.
 */
export type SessionizeRoomSchemaType = z.infer<typeof sessionizeRoomSchema>

/**
 * ID of the question for the session number.
 */
export const QUESTION_SESSION_NUMBER = 52153
/**
 * ID of the category for the session type.
 */
export const CATEGORY_SESSION_TYPE = 46584
/**
 * ID of the category for the session level.
 */
export const CATEGORY_SESSION_LEVEL = 53862
