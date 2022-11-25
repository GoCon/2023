import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SpeakersSection } from '.'

const meta: ComponentMeta<typeof SpeakersSection> = {
  component: SpeakersSection
}
export default meta

const Template: ComponentStory<typeof SpeakersSection> = args => <SpeakersSection {...args} />
export const Default = Template.bind({})
