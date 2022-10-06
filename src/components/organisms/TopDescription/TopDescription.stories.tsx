import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { TopDescription } from '.'

const meta: ComponentMeta<typeof TopDescription> = {
  component: TopDescription
}
export default meta

const Template: ComponentStory<typeof TopDescription> = () => <TopDescription />

export const Default = Template.bind({})
