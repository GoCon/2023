import type { Meta, StoryObj } from '@storybook/react'
import { BoothCard } from '.'
import { faker } from '@faker-js/faker'

const meta: Meta<typeof BoothCard> = {
  component: BoothCard
}
export default meta

export const Default: StoryObj<typeof BoothCard> = {
  args: {
    title: faker.lorem.lines(),
    description: faker.lorem.paragraph()
  }
}
