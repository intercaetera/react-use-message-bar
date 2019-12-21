import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import useMessageBar from '../useMessageBar';

test('renders with initial state', () => {
	// given
	const initialState = [{ id: 0, content: 'alpha' }];

	// when
	const { result } = renderHook(() => useMessageBar(initialState));

	// then
	expect(result.current.bars).toEqual(initialState);
});

test('creates a notification when createNotification is called', () => {
	// given
	const { result } = renderHook(() => useMessageBar([]));

	// when
	act(() => result.current.createNotification('alpha', 0));

	// then
	expect(result.current.bars).toEqual([{ id: 0, content: 'alpha' }]);
});

test('deletes a notification when deleteNotification is called', () => {
	// given
	const initialState = [{ id: 0, content: 'alpha' }];
	const { result } = renderHook(() => useMessageBar(initialState));

	// when
	act(() => result.current.deleteNotification(0));

	// then
	expect(result.current.bars).toEqual([]);
});

test('doesn\'t delete any notifications if the id passed to deleteNotification doesn\'t exist', () => {
	// given
	const initialState = [{ id: 0, content: 'alpha' }];
	const { result } = renderHook(() => useMessageBar(initialState));

	// when
	act(() => result.current.deleteNotification(1));

	// then
	expect(result.current.bars).toEqual(initialState);
});

test('deletes all notifications if the deleteAllNotifications function is called', () => {
	// given
	const initialState = [
		{ id: 0, content: 'alpha' },
		{ id: 1, content: 'beta' },
	];
	const { result } = renderHook(() => useMessageBar(initialState));

	// when
	act(() => result.current.deleteAllNotifications());

	// then
	expect(result.current.bars).toEqual([]);
});

test('exposes appropriate props', () => {
	// given
	const initialState = [{ id: 0, content: 'alpha' }];

	// when
	const { result } = renderHook(() => useMessageBar(initialState));

	// then
	expect(result.current.props.bars).toEqual(initialState);
	expect(typeof result.current.props.deleteNotification).toBe('function');
});
