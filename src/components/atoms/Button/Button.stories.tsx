import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '.'

const meta: ComponentMeta<typeof Button> = {
  component: Button
}
export default meta

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
// TODO: Switch languages by using react-i18next (taigakiyokawa)
Default.args = {
  text: 'スピーカーに応募する'
}
