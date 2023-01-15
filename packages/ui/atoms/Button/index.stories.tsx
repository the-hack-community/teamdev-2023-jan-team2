import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta: Meta<typeof Button> = { component: Button }
export default meta

export const Business: StoryObj<typeof Button> = {
  args: {
    title: 'TEST',
  },
}
