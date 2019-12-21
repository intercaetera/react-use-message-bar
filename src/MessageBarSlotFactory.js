import React from 'react';
import PropTypes from 'prop-types';

import DefaultMessageBar from './DefaultMessageBar';

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
			})
		),
		deleteNotification: PropTypes.func.isRequired,
	};

	return MessageBarSlot;
};

export default MessageBarSlotFactory;
