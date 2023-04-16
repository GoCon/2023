import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { faker } from '@faker-js/faker'
import { TrackCard } from '.'
import { Box } from '@mui/material'
import { Colors } from 'src/styles/color'

const meta: ComponentMeta<typeof TrackCard> = {
  component: TrackCard
}
export default meta

const Template: ComponentStory<typeof TrackCard> = args => (
  <Box width="300px">
    <TrackCard {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  id: 'A1-1',
  title: faker.lorem.paragraph(),
  minute: 20,
  speaker: faker.name.fullName(),
  speakerIcon: faker.image.avatar()
}

export const Colored = Template.bind({})
Colored.args = {
  id: 'A1-1',
  title: faker.lorem.paragraph(),
  minute: 20,
  speaker: faker.name.fullName(),
  speakerIcon: faker.image.avatar(),
  color: Colors.background.secondary_green,
  idColor: Colors.background.primary_green
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
  title: 'opening'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  title: 'lunch time',
  fullWidth: true
}
