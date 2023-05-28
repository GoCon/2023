import type { Meta, StoryObj } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { TrackCard } from '.'

const meta: Meta<typeof TrackCard> = {
  component: TrackCard
}
export default meta

type Story = StoryObj<typeof TrackCard>

export const Default: Story = {
  args: {
    roomName: 'Room A',
    sessionId: 'A0-L',
    title: faker.lorem.paragraph(),
    sessionType: 'Long Talk(40min)',
    speakerName: faker.name.fullName(),
    profilePicture: faker.image.avatar()
  }
}

export const Green: Story = {
  args: {
    roomName: 'Room B',
    sessionId: 'B0-S',
    title: faker.lorem.paragraph(),
    sessionType: 'Short Talk(20min)',
    speakerName: faker.name.fullName(),
    profilePicture: faker.image.avatar()
  }
}
