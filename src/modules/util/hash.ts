const { createHash } = require('crypto')

export function toSha256(s: string) {
  return createHash('sha256').update(s).digest('hex')
}
