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
    roomName: 'Room A',
    sessionId: 'A3-L',
    description: faker.lorem.paragraph(),
    speaker: {
      fullName: faker.name.fullName(),
      tagLine: faker.company.name(),
      profilePicture: faker.image.avatar()
    },
    sessionLevel: 'Intermediate',
    sessionType: 'Challenge Session(20min)'
  }
}

export const LongTitleAndDescription: ComponentStoryObj<typeof SessionCard> = {
  args: {
    title: faker.lorem.sentences(2),
    roomName: 'Room A',
    sessionId: 'A3-L',
    description: faker.lorem.paragraphs(10),
    speaker: {
      fullName: faker.name.fullName(),
      tagLine: faker.company.name(),
      profilePicture: faker.image.avatar()
    },
    sessionLevel: 'Intermediate',
    sessionType: 'Challenge Session(20min)'
  }
}
