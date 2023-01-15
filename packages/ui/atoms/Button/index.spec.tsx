import { render } from '@testing-library/react'
import Button from './index'
it('test button child', () => {
  const { getByText } = render(<Button title='text' />)
  expect(getByText('text')).toBeTruthy()
})
