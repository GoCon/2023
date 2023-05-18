import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SessionLabel } from '.'

const meta: ComponentMeta<typeof SessionLabel> = {
  component: SessionLabel
}
export default meta

export const RoomA: ComponentStoryObj<typeof SessionLabel> = {
  args: {
    roomName: 'Room A',
    sessionId: 'A1-1',
    isRoomNameDisplayed: true
  }
}

export const RoomB: ComponentStoryObj<typeof SessionLabel> = {
  args: {
    roomName: 'Room B',
    sessionId: 'B1-1',
    isRoomNameDisplayed: true
  }
}
