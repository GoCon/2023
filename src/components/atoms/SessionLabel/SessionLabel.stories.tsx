import { Meta, StoryObj } from '@storybook/react'
import { SessionLabel } from '.'

const meta: Meta<typeof SessionLabel> = {
  component: SessionLabel
}
export default meta

export const RoomA: StoryObj<typeof SessionLabel> = {
  args: {
    roomName: 'Room A',
    sessionId: 'A1-1',
    isRoomNameDisplayed: true
  }
}

export const RoomB: StoryObj<typeof SessionLabel> = {
  args: {
    roomName: 'Room B',
    sessionId: 'B1-1',
    isRoomNameDisplayed: true
  }
}
