import { Link as MuiLink } from '@mui/material'
import { useTranslation } from 'react-i18next'
import TwitterIcon from '@mui/icons-material/Twitter'
import { FC } from 'react'
import { Colors } from 'src/styles/color'

type Props = {
  sessionId: string
  title: string
  roomName: 'Room A' | 'Room B'
}

const getHashtagByRoom = (roomName: Props['roomName']): string => {
  switch (roomName) {
    case 'Room A':
      return 'goconA'
    case 'Room B':
      return 'goconB'
    default:
      throw new Error(`Invalid room: ${roomName}`)
  }
}

/**
 * Link to create a new tweet with URL, title, and hashtags for each session.
 */
export const TweetButton: FC<Props> = ({ sessionId, title, roomName }) => {
  const { t } = useTranslation()
  const roomHashtag = getHashtagByRoom(roomName)
  const tweetUrl = `https://twitter.com/intent/tweet?url=https://gocon.jp/2023/sessions/${sessionId}&text=${title}&hashtags=gocon,${roomHashtag}`

  return (
    <MuiLink
      href={tweetUrl}
      target="_blank"
      variant="body2"
      sx={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        textDecoration: 'none',
        color: Colors.text.primary,
        ':hover': {
          color: Colors.text.primary_hover,
          textDecoration: 'underline'
        }
      }}
    >
      <TwitterIcon aria-label={t('tweet')} />
      <span>{t('tweet')}</span>
    </MuiLink>
  )
}
