// @vitest-environment jsdom

import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Todo from './Todo'

afterEach(cleanup)

describe('Todo', () => {
  it('shows an incomplete todo and calls its actions', async () => {
    const user = userEvent.setup()
    const todo = { _id: 'todo-1', text: 'Write tests', done: false }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

    expect(screen.getByText('Write tests')).toBeTruthy()
    expect(screen.getByText('This todo is not done')).toBeTruthy()

    await user.click(screen.getByRole('button', { name: /set as done/i }))
    await user.click(screen.getByRole('button', { name: /delete/i }))

    expect(completeTodo).toHaveBeenCalledWith(todo)
    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })

  it('shows a completed todo without a complete action', () => {
    const todo = { _id: 'todo-2', text: 'Review tests', done: true }

    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('This todo is done')).toBeTruthy()
    expect(screen.queryByRole('button', { name: /set as done/i })).toBeNull()
  })
})
