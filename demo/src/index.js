import React from 'react';
import { render } from 'react-dom';

import useMessageBar from '../../src/useMessageBar';
import MessageBarSlotFactory from '../../src/MessageBarSlotFactory';

const MessageBarSlot = MessageBarSlotFactory();

const Demo = () => {
	const { createNotification, props } = useMessageBar();

	const handleClick = () => createNotification(Date.now());

	return (
		<div>
			<MessageBarSlot {...props} />
			<button onClick={handleClick}>Create Bar</button>
		</div>
	);
};

render(<Demo />, document.querySelector('#demo'));
