import { StoryObj, Meta } from '@storybook/react'
import { GoogleCalendarButton } from '.'

const meta: Meta<typeof GoogleCalendarButton> = {
  component: GoogleCalendarButton
}
export default meta

export const Default: StoryObj<typeof GoogleCalendarButton> = {
  args: {
    googleCalendarEventCreationLink: 'https://example.com'
  }
}
