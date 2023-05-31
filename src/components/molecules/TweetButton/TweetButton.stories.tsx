import { StoryObj, Meta } from '@storybook/react'
import { TweetButton } from '.'

const meta: Meta<typeof TweetButton> = {
  component: TweetButton
}
export default meta

export const RoomA: StoryObj<typeof TweetButton> = {
  args: {
    sessionId: 'A0-X',
    title: 'Foo',
    roomName: 'Room A'
  }
}

export const RoomB: StoryObj<typeof TweetButton> = {
  args: {
    sessionId: 'B0-Y',
    title: 'Bar',
    roomName: 'Room B'
  }
}
