import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Header } from '.'

const meta: ComponentMeta<typeof Header> = {
  component: Header
}
export default meta

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})
