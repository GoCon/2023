import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SpeakerBlock } from '.'
import { faker } from '@faker-js/faker'

const meta: ComponentMeta<typeof SpeakerBlock> = {
  component: SpeakerBlock
}
export default meta

const Template: ComponentStory<typeof SpeakerBlock> = args => <SpeakerBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  iconUrl: faker.image.avatar(),
  name: faker.name.fullName(),
  tagLine: faker.company.name()
}
