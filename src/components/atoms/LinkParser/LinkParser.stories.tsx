import { Meta, StoryObj } from '@storybook/react'
import { LinkParser } from '.'

const meta: Meta<typeof LinkParser> = {
  component: LinkParser
}
export default meta

export const Default: StoryObj<typeof LinkParser> = {
  args: {
    content: `こんにちは!! https://www.example.com?hogefuga=aaaaaaaaaaaaaaaaaaaa ←こちらをクリック`
  }
}
