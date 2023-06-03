import { StoryObj, Meta } from '@storybook/react'
import { YouTubeEmbedFrame } from '.'

const meta: Meta<typeof YouTubeEmbedFrame> = {
  component: YouTubeEmbedFrame
}
export default meta

export const Default: StoryObj<typeof YouTubeEmbedFrame> = {
  args: {
    // A sample video from YouTube's help page.
    recordingUrl: 'https://www.youtube.com/embed/lJIrF4YjHfQ'
  }
}
