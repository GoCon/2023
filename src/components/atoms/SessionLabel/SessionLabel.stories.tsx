import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SessionLabel } from '.'
import { Colors } from 'src/styles/color'

const meta: ComponentMeta<typeof SessionLabel> = {
  component: SessionLabel
}
export default meta

const Template: ComponentStory<typeof SessionLabel> = args => <SessionLabel {...args} />

export const Pink = Template.bind({})
Pink.args = {
  text: 'Room A : A1-1',
  color: Colors.background.primary_pink
}

export const Green = Template.bind({})
Green.args = {
  text: 'Room B : B1-1',
  color: Colors.background.primary_green
}
