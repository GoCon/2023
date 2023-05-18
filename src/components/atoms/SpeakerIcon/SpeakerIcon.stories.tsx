import type { Meta, StoryObj } from '@storybook/react'
import { SpeakerIcon } from '.'
import { faker } from '@faker-js/faker'

const meta: Meta<typeof SpeakerIcon> = {
  component: SpeakerIcon
}
export default meta

export const Default: StoryObj<typeof SpeakerIcon> = {
  args: {
    iconUrl: faker.image.avatar(),
    name: 'sample',
    size: '40px'
  }
}
