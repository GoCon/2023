import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconAvatar } from '.'

const meta: ComponentMeta<typeof IconAvatar> = {
  component: IconAvatar
}
export default meta

const Template: ComponentStory<typeof IconAvatar> = args => <IconAvatar {...args} />

export const Default = Template.bind({})
Default.args = {
  iconUrl: 'https://loremflickr.com/80/80/cat',
  name: 'sample'
}
