import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { PlenumCard } from '.'
import { Box } from '@mui/material'

const meta: ComponentMeta<typeof PlenumCard> = {
  component: PlenumCard
}
export default meta

const Template: ComponentStory<typeof PlenumCard> = args => (
  <Box width="300px">
    <PlenumCard {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Break'
}
