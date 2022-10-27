import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SponsorsSection } from '.'

const meta: ComponentMeta<typeof SponsorsSection> = {
  component: SponsorsSection
}
export default meta

const Template: ComponentStory<typeof SponsorsSection> = args => <SponsorsSection {...args} />
export const Default = Template.bind({})
