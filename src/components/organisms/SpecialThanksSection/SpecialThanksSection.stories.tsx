import type { Meta, StoryObj } from '@storybook/react'
import { SpecialThanksSection } from '.'

const meta: Meta<typeof SpecialThanksSection> = {
  component: SpecialThanksSection
}
export default meta

export const Default: StoryObj<typeof SpecialThanksSection> = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  }
}
