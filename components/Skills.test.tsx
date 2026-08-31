import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills', () => {
  it('menampilkan heading & item dari data', () => {
    render(<Skills groups={[{ heading: 'Frontend', items: ['React', 'Next.js'] }]} />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  it('tidak menampilkan apa-apa kalau data kosong', () => {
    const { container } = render(<Skills groups={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})