import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { MainVisual } from '.'

const meta: ComponentMeta<typeof MainVisual> = {
  component: MainVisual
}
export default meta

const Template: ComponentStory<typeof MainVisual> = () => <MainVisual />

export const Default = Template.bind({})
