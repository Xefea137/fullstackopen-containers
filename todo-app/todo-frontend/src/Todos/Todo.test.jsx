import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('render todo', () => {
  const todo = {
    text: 'Testing todo'
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Testing todo')
  expect(element).toBeDefined()
})