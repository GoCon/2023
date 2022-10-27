import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SponsorsCard } from '.'
import SponsorsLogoSample from 'src/components/molecules/SponsorsCard/images/SponsorsLogoSample.png'

const meta: ComponentMeta<typeof SponsorsCard> = {
  component: SponsorsCard
}
export default meta

const Template: ComponentStory<typeof SponsorsCard> = args => <SponsorsCard {...args} />

const sampleLogo = {
  image: SponsorsLogoSample,
  alt: 'Logo Sample'
}

export const PlatinumGold = Template.bind({})
PlatinumGold.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
PlatinumGold.args = {
  planType: 'platinumGold',
  logoImages: [sampleLogo, sampleLogo]
}

export const Gold = Template.bind({})
Gold.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
Gold.args = {
  planType: 'gold',
  logoImages: [sampleLogo, sampleLogo]
}

export const Silver = Template.bind({})
Silver.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
Silver.args = {
  planType: 'silver',
  logoImages: [sampleLogo, sampleLogo, sampleLogo, sampleLogo, sampleLogo, sampleLogo]
}

export const Bronze = Template.bind({})
Bronze.parameters = {
  backgrounds: {
    default: 'secondary'
  }
}
Bronze.args = {
  planType: 'bronze',
  logoImages: [
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo,
    sampleLogo
  ]
}
