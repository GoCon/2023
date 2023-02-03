import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommunityBoothSection } from '.'

const meta: ComponentMeta<typeof CommunityBoothSection> = {
  component: CommunityBoothSection
}
export default meta

const Template: ComponentStory<typeof CommunityBoothSection> = args => <CommunityBoothSection {...args} />
export const Default = Template.bind({})
