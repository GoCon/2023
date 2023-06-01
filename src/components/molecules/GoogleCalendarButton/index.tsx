import { Link as MuiLink } from '@mui/material'
import { useTranslation } from 'react-i18next'
import EventIcon from '@mui/icons-material/Event'
import { FC } from 'react'
import { Colors } from 'src/styles/color'

type Props = {
  googleCalendarEventCreationLink: string
}

/**
 * Link to create a new tweet with URL, title, and hashtags for each session.
 */
export const GoogleCalendarButton: FC<Props> = ({ googleCalendarEventCreationLink }) => {
  const { t } = useTranslation()

  return (
    <MuiLink
      href={googleCalendarEventCreationLink}
      target="_blank"
      variant="body2"
      sx={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        color: Colors.text.primary,
        textDecoration: 'none',
        ':hover': {
          color: Colors.text.primary_hover,
          textDecoration: 'underline'
        }
      }}
    >
      <EventIcon />
      <span>{t('add_to_calendar')}</span>
    </MuiLink>
  )
}
