import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconTwitter } from '.'

const meta: ComponentMeta<typeof IconTwitter> = {
  component: IconTwitter
}
export default meta

const Template: ComponentStory<typeof IconTwitter> = args => <IconTwitter />

export const Default = Template.bind({})
