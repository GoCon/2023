import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { SessionCard } from '.'

const meta: ComponentMeta<typeof SessionCard> = {
  component: SessionCard
}
export default meta

const Template: ComponentStory<typeof SessionCard> = args => <SessionCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: faker.lorem.sentence(),
  room: 'room',
  sessionId: 'sessionId',
  description: faker.lorem.paragraph(),
  speaker: {
    fullName: faker.name.fullName(),
    tagLine: faker.company.name(),
    profilePicture: faker.image.avatar()
  },
  sessionLevel: 'sessionLevel',
  sessionType: 'sessionType'
}
