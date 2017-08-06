import React from 'react';
import BCSpinner from './shared/bc_spinner';

const Loading = () => (
	<div className="loading-container">
		<span className="loading-text">
			<h3>
				LOADING
			</h3>
		</span>

		<BCSpinner />
	</div>
);

export default Loading;
