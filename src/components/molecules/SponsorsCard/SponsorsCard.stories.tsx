import type { Meta, StoryObj } from '@storybook/react'
import { SponsorsCard } from '.'
import { sponsors } from 'src/modules/sponsors'

const meta: Meta<typeof SponsorsCard> = {
  component: SponsorsCard
}
export default meta

type Story = StoryObj<typeof SponsorsCard>

export const PlatinumGold: Story = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  },

  args: {
    planType: 'platinum',
    sponsors: [
      { id: 1, name: 'sample', logo: 'sponsors/00_sample.png' },
      { id: 2, name: 'sample', logo: 'sponsors/00_sample.png' }
    ]
  }
}

export const Gold: Story = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  },

  args: {
    planType: 'gold',
    sponsors: sponsors.gold
  }
}

export const Silver: Story = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  },

  args: {
    planType: 'silver',
    sponsors: sponsors.silver
  }
}

export const Bronze: Story = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  },

  args: {
    planType: 'bronze',
    sponsors: sponsors.bronze
  }
}
