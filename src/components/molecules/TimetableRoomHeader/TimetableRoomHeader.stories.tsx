import { StoryObj, Meta } from '@storybook/react'
import { TimetableRoomHeader } from '.'

const meta: Meta<typeof TimetableRoomHeader> = {
  component: TimetableRoomHeader
}
export default meta

export const RoomA: StoryObj<typeof TimetableRoomHeader> = {
  args: {
    roomName: 'Room A'
  }
}

export const RoomB: StoryObj<typeof TimetableRoomHeader> = {
  args: {
    roomName: 'Room B'
  }
}
