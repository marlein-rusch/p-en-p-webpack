import React from 'react';

// 'Loading...' is a fallback for if ever CSS doesn't work
const Spinner = () => (
	<div className="loader-container">
		<div className="loader">Loading...</div>
	</div>
);

export default Spinner;
