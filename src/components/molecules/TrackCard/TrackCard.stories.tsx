import type { Meta, StoryObj } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { TrackCard } from '.'
import { Colors } from 'src/styles/color'

const meta: Meta<typeof TrackCard> = {
  component: TrackCard
}
export default meta

type Story = StoryObj<typeof TrackCard>

export const Default: Story = {
  args: {
    id: 'A1-1',
    title: faker.lorem.paragraph(),
    minute: 20,
    speaker: faker.name.fullName(),
    speakerIcon: faker.image.avatar()
  }
}

export const Green: Story = {
  args: {
    id: 'A1-1',
    title: faker.lorem.paragraph(),
    minute: 20,
    speaker: faker.name.fullName(),
    speakerIcon: faker.image.avatar(),
    color: Colors.background.secondary_green,
    idColor: Colors.background.primary_green
  }
}
