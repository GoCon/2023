import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SpeakerIcon } from '.'
import { faker } from '@faker-js/faker'

const meta: ComponentMeta<typeof SpeakerIcon> = {
  component: SpeakerIcon
}
export default meta

export const Default: ComponentStoryObj<typeof SpeakerIcon> = {
  args: {
    iconUrl: faker.image.avatar(),
    name: 'sample',
    size: '40px'
  }
}
