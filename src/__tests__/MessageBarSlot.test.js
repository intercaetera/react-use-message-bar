import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MessageBarSlotFactory from '../MessageBarSlotFactory';

const MessageBarSlot = MessageBarSlotFactory();

test('creates a slot for a custom component', () => {
	// given
	const TestMessageBar = ({ handleDismiss, children }) => {
		return (
			<div>
				<p onClick={handleDismiss}>testbar:{children}</p>
			</div>
		);
	};
	const bars = [{ id: 1, content: 'alpha' }];
	const deleteNotification = () => {};

	// when
	const MessageBarSlot = MessageBarSlotFactory(TestMessageBar);
	const { getByText } = render(
		<MessageBarSlot bars={bars} deleteNotification={deleteNotification} />
	);

	// then
	expect(getByText('testbar:alpha')).toBeInTheDocument();
});

test('renders a message bar for each bar passed', () => {
	// given
	const bars = [
		{
			id: 1,
			content: 'alpha',
		},
		{
			id: 2,
			content: 'beta',
		},
	];
	const deleteNotification = () => {};

	// when
	const { getByText } = render(
		<MessageBarSlot bars={bars} deleteNotification={deleteNotification} />
	);

	// then
	expect(getByText('alpha')).toBeInTheDocument();
	expect(getByText('beta')).toBeInTheDocument();
});

test('calls the delete notification function with the correct id when the X is clicked', () => {
	// given
	const TEST_ID = 23;
	const bars = [{ id: TEST_ID, content: 'alpha' }];
	const deleteNotification = jest.fn();
	const { getByTestId } = render(
		<MessageBarSlot bars={bars} deleteNotification={deleteNotification} />
	);

	// when
	fireEvent.click(getByTestId('close'));

	// expect
	expect(deleteNotification).toHaveBeenCalledWith(TEST_ID);
});
