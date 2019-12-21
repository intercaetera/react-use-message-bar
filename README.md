# react-with-message-bar

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A simple message bar hook for React.

## Installation

```
npm install --save react-use-message-bar
```

## Usage

```js
import { useMessageBar, MessageBarSlotFactory } from 'react-use-message-bar';

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
```


## API

### `useMessageBar`

This hook returns an object with the following properties:

- `createNotification(content, initialId)` - creates a notification
  - `content` (string or component) - the content of the notification
  - `initialId` (any, optional) - a unique id of the notification, if empty `shortid` will be used internally.

- `deleteNotification(id)` - deletes a notification with a given id

- `deleteNotification()` - deletes all notifications

- `props` - an object that should be passed to the `MessageBarSlot` to render the notifications properly.

- `bars` - an array of `{ id, content }` objects that represent the currently displayed bars.

### `MessageBarSlotFactory`

This is a function that creates a MessageBarSlot component that will render given message bars. It accepts one argument - a `MessageBar` component that will be rendered.

The `MessageBar` component is injected with two props:
  - `handleDismiss` - a function that should be called when the user would dismiss the bar, for instance by clicking a "close" button.
  - `children` - the content of the message bar.

The `DefaultMessageBar` component will be used if the `MessageBar` is not provided - see the source for an example how to build it.


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/intercaetera/react-use-message-bar

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-use-message-bar

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/intercaetera/react-use-message-bar
