import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SpecialThanksSection } from '.'

const meta: ComponentMeta<typeof SpecialThanksSection> = {
  component: SpecialThanksSection
}
export default meta

export const Default: ComponentStoryObj<typeof SpecialThanksSection> = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  }
}
