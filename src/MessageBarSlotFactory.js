import React from 'react';
import PropTypes from 'prop-types';

import DefaultMessageBar from './DefaultMessageBar';

/**
 * Creates a message bar slot component.
 *
 * @param {React.Component} MessageBar - a message bar component
 * that will be rendered.
 * 
 * This component will be injected with two props:
 *		- `handleDismiss` - a function that should be called
 *			when the user would dismiss the bar, for instance
 *			by clicking a "close" button
 *
 *		- `children` - the content of the message bar.
 * @returns {React.Component} MessageBarSlot. A slot containing
 * all message bars. This slot should be provided with `props`
 * from the useMessageBar component.
 */
const MessageBarSlotFactory = (MessageBar = DefaultMessageBar) => {
	const MessageBarSlot = ({ bars, deleteNotification }) => {
		const deleteNotificationFactory = id => () => deleteNotification(id);

		const renderNotifications = () =>
			bars.map(({ id, content }) => (
				<MessageBar key={id} handleDismiss={deleteNotificationFactory(id)}>
					{content}
				</MessageBar>
			));

		return <React.Fragment>{renderNotifications()}</React.Fragment>;
	};

	MessageBarSlot.propTypes = {
		bars: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.any.isRequired,
				content: PropTypes.node.isRequired,
			}),
		),
		deleteNotification: PropTypes.func.isRequired,
	};

	return MessageBarSlot;
};

export default MessageBarSlotFactory;
