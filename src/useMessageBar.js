import { useState } from 'react';
import { generate as shortid } from 'shortid';

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
