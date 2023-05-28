import type { Meta, StoryObj } from '@storybook/react'
import { PlenumCard } from '.'

const meta: Meta<typeof PlenumCard> = {
  component: PlenumCard
}
export default meta

export const Default: StoryObj<typeof PlenumCard> = {
  args: {
    title: 'Break',
    minutes: 10
  }
}
