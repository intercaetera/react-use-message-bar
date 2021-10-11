import { ReactNode } from 'react';
import MessageBarSlotFactory from './MessageBarSlotFactory';
import useMessageBar from './useMessageBar';

/**
	* An individual message bar with an id and content.
	*
	* @typedef {object} MessageBar
	* @property {any} id - any unique value as id of the bar
	* @property {(string|ReactNode)} content -
	*/

export default {
	MessageBarSlotFactory,
	useMessageBar,
};
