import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Footer } from '.'

const meta: ComponentMeta<typeof Footer> = {
  component: Footer
}
export default meta

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})
