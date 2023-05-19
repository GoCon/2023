import type { Meta, StoryObj } from '@storybook/react'
import { SpeakerBlock } from '.'
import { faker } from '@faker-js/faker'

const meta: Meta<typeof SpeakerBlock> = {
  component: SpeakerBlock
}
export default meta

export const Default: StoryObj<typeof SpeakerBlock> = {
  args: {
    profilePicture: faker.image.avatar(),
    name: faker.name.fullName(),
    tagLine: faker.company.name()
  }
}
