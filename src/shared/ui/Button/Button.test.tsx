import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})

	test('Test ghost theme', () => {
		render(<Button variant={ButtonTheme.GHOST}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('ghost')
		screen.debug()
	})
})
