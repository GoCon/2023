import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SponsorsCard } from '.'
import { sponsors } from 'src/modules/sponsors'

const meta: ComponentMeta<typeof SponsorsCard> = {
  component: SponsorsCard
}
export default meta

const Template: ComponentStory<typeof SponsorsCard> = args => <SponsorsCard {...args} />

export const PlatinumGold = Template.bind({})
PlatinumGold.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
PlatinumGold.args = {
  planType: 'platinum',
  sponsors: [
    { id: 1, name: 'sample', logo: 'sponsors/00_sample.png' },
    { id: 2, name: 'sample', logo: 'sponsors/00_sample.png' }
  ]
}

export const Gold = Template.bind({})
Gold.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
Gold.args = {
  planType: 'gold',
  sponsors: sponsors.gold
}

export const Silver = Template.bind({})
Silver.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
Silver.args = {
  planType: 'silver',
  sponsors: sponsors.silver
}

export const Bronze = Template.bind({})
Bronze.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
Bronze.args = {
  planType: 'bronze',
  sponsors: sponsors.bronze
}
