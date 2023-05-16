import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SpeakerBlock } from '.'
import { faker } from '@faker-js/faker'

const meta: ComponentMeta<typeof SpeakerBlock> = {
  component: SpeakerBlock
}
export default meta

export const Default: ComponentStoryObj<typeof SpeakerBlock> = {
  args: {
    iconUrl: faker.image.avatar(),
    name: faker.name.fullName(),
    tagLine: faker.company.name()
  }
}
