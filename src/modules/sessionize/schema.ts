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
 * ID of the question and categories
 */
export const questionSessionNumber = 52153
export const categorySessionType = 46584
export const categorySessionLevel = 53862
