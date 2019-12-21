import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import DefaultMessageBar from '../DefaultMessageBar';

test('renders children', () => {
	// given
	const content = 'TEST';
	const handleDismiss = () => {};

	// when
	const { getByText } = render(
		<DefaultMessageBar handleDismiss={handleDismiss}>
			{content}
		</DefaultMessageBar>
	);

	// then
	expect(getByText(content)).toBeInTheDocument();
});

test('fires the dismiss function when the X is clicked', () => {
	// given
	const dismiss = jest.fn();

	const { getByTestId } = render(
		<DefaultMessageBar handleDismiss={dismiss}>content</DefaultMessageBar>
	);

	// when
	fireEvent.click(getByTestId('close'));

	// then
	expect(dismiss).toHaveBeenCalled();
});
