/**
 * The set of a session and a speaker belongs to the session used in `/sessions`.
 */
export type SessionAndSpeakerForSessionsList = {
  title: string
  roomName: 'Room A' | 'Room B'
  sessionId: string
  description: string
  sessionLevel: string | null
  sessionType: string | null
  speaker: {
    fullName: string
    tagLine: string
    profilePicture: string
  }
}
