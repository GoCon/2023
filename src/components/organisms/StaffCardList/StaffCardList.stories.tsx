import { StoryObj, Meta } from '@storybook/react'
import { StaffCardList } from '.'
import { staff } from 'src/modules/staff'

const meta: Meta<typeof StaffCardList> = {
  component: StaffCardList
}
export default meta

export const Default: StoryObj<typeof StaffCardList> = {
  parameters: {
    backgrounds: {
      default: 'secondary'
    }
  },
  args: {
    staff: staff
  }
}
