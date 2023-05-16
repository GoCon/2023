import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SessionLabel } from '.'

const meta: ComponentMeta<typeof SessionLabel> = {
  component: SessionLabel
}
export default meta

export const Pink: ComponentStoryObj<typeof SessionLabel> = {
  args: {
    room: 'a',
    sessionId: 'A1-1',
    isRoomNameDisplayed: true
  }
}

export const Green: ComponentStoryObj<typeof SessionLabel> = {
  args: {
    room: 'b',
    sessionId: 'B1-1',
    isRoomNameDisplayed: true
  }
}
