import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('menampilkan ketiga bagian teks', () => {
    render(<About intro="Halo intro" pull="Kutipan penting" outro="Penutup" />)
    expect(screen.getByText('Halo intro')).toBeInTheDocument()
    expect(screen.getByText('Kutipan penting')).toBeInTheDocument()
    expect(screen.getByText('Penutup')).toBeInTheDocument()
  })
})