import { createHash } from 'crypto'

export function toSha256(s: string) {
  return createHash('sha256').update(s).digest('hex')
}
