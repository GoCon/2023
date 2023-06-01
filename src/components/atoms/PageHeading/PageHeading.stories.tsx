import type { Meta, StoryObj } from '@storybook/react'
import { PageHeading } from '.'

const meta: Meta<typeof PageHeading> = {
  component: PageHeading
}
export default meta

export const Default: StoryObj<typeof PageHeading> = {
  args: {
    children: 'Sessions & Speakers'
  }
}
