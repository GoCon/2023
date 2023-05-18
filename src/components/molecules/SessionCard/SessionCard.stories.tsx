import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { SessionCard } from '.'

const meta: ComponentMeta<typeof SessionCard> = {
  component: SessionCard
}
export default meta

export const Default: ComponentStoryObj<typeof SessionCard> = {
  args: {
    title: faker.lorem.sentence(),
    sessionId: 'sessionId',
    roomName: 'Room A',
    description: faker.lorem.paragraph(),
    speaker: {
      fullName: faker.name.fullName(),
      tagLine: faker.company.name(),
      profilePicture: faker.image.avatar()
    },
    sessionLevel: 'sessionLevel',
    sessionType: 'sessionType'
  }
}
