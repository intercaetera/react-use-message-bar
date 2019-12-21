import React from 'react';
import PropTypes from 'prop-types';

const messageBarStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '0.8rem',
	fontSize: '0.8rem',
	border: '1px solid black',
	borderRadius: '4px',
};

const buttonStyles = {
	appearance: 'none',
	outline: 'none',
	border: 'none',
	background: 'none',
	cursor: 'pointer',
};

const DefaultMessageBar = ({ handleDismiss, children }) => {
	return (
		<div style={messageBarStyles}>
			<React.Fragment>{children}</React.Fragment>
			<button style={buttonStyles} onClick={handleDismiss} data-testid="close">
        🗙
			</button>
		</div>
	);
};

DefaultMessageBar.propTypes = {
	children: PropTypes.node.isRequired,
	handleDismiss: PropTypes.func.isRequired,
};

export default DefaultMessageBar;
