import type { Meta, StoryObj } from '@storybook/react'
import { ExternalLink } from '.'

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink
}
export default meta

export const Default: StoryObj<typeof ExternalLink> = {
  args: {
    href: 'https://gocon.jp/2022spring',
    children: 'Go Conference 2022 Spring'
  }
}
