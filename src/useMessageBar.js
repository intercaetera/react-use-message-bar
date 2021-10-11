import { useState, ReactNode } from 'react';
import { generate as shortid } from 'shortid';

import { MessageBar } from './index';

/**
 * Creates a message bar.
 *
 * @callback createNotification
 * @param {(string|ReactNode)} content
 * @param {?any} initialId - if not provided, will be generated with shortid
 */

/**
 * Deletes a message bar.
 *
 * @callback deleteNotification
 * @param {any} id - the id of the message bar to delete
 */

/**
 * Deletes all message bars.
 *
 * @callback deleteAllNotifications
 */

/**
 * React hook for creating message bars.
 *
 * @example
 *
 *  	import { useMessageBar, MessageBarSlotFactory } from 'react-use-message-bar';
 * 
 * 		const MessageBarSlot = MessageBarSlotFactory();
 * 
 * 		const Demo = () => {
 * 			const { createNotification, props } = useMessageBar();
 * 
 * 			const handleClick = () => createNotification(Date.now());
 * 
 * 			return (
 * 				<div>
 * 					<MessageBarSlot {...props} />
 * 					<button onClick={handleClick}>Create Bar</button>
 * 				</div>
 * 			);
 * 		};
 * @param {MessageBar[]} initialState An array of message bars to start with.
 * @returns {object} - 
 * @property {MessageBar[]} bars An array of all message bars.
 * @property {createNotification} createNotification Creates a notification.
 * @property {deleteNotification} deleteNotification Deletes a notification with a given id.
 * @property {deleteAllNotifications} deleteAllNotifications Deletes all notifications.
 * @property {object} props An object of props to pass to MessageBarSlot.
 */
const useMessageBar = (initialState = []) => {
	const [bars, setBars] = useState(initialState);

	const createNotification = (content, initialId) => {
		const id = initialId === undefined ? shortid() : initialId;

		setBars([...bars, { id, content }]);
	};

	const deleteNotification = id => {
		const barsToKeep = bars.filter(bar => bar.id !== id);
		setBars(barsToKeep);
	};

	const deleteAllNotifications = () => setBars([]);

	return {
		bars,
		createNotification,
		deleteNotification,
		deleteAllNotifications,

		props: {
			bars,
			deleteNotification,
		},
	};
};

export default useMessageBar;
