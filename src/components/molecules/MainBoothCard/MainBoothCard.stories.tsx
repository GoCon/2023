import type { Meta, StoryObj } from '@storybook/react'
import { MainBoothCard } from '.'
import { faker } from '@faker-js/faker'

const meta: Meta<typeof MainBoothCard> = {
  component: MainBoothCard
}
export default meta

export const Default: StoryObj<typeof MainBoothCard> = {}
