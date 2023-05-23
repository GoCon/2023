import { StoryObj, Meta } from '@storybook/react'
import { StaffCard } from '.'

const meta: Meta<typeof StaffCard> = {
  component: StaffCard
}
export default meta

export const Default: StoryObj<typeof StaffCard> = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  },
  args: {
    name: 'Kiyokawa Taiga',
    icon: 'https://avatars.githubusercontent.com/u/40013676',
    organizationName: '株式会社マネーフォワード',
    twitterLink: 'https://twitter.com/taigakiyokawa',
    githubLink: 'https://github.com/taigakiyokawa',
    otherLink: 'https://zenn.dev/taigakiyokawa'
  }
}
