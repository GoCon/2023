import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SessionLabel } from '.'
import { Colors } from 'src/styles/color'

const meta: ComponentMeta<typeof SessionLabel> = {
  component: SessionLabel
}
export default meta

export const Pink: ComponentStoryObj<typeof SessionLabel> = {
  args: {
    text: 'Room A : A1-1',
    color: Colors.background.primary_pink
  }
}

export const Green: ComponentStoryObj<typeof SessionLabel> = {
  args: {
    text: 'Room B : B1-1',
    color: Colors.background.primary_green
  }
}
