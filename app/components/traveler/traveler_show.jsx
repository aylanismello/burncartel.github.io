import React from 'react';

class TravelerShow extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (Object.keys(nextProps.formattedQuery)[0] === 'location_type') {

		}
	}

	render() {
		return (
			<div className="container">
				<h1>
					hello :)
				</h1>
			</div>
		);
	}
}

export default TravelerShow;
