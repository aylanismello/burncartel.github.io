import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
	<div>
		<h1>
			NO MATCH
		</h1>

		<h2>
			THIS IS A GENERAL 404 ROUTE PAGE
		</h2>

		<Link to="/">
			GO HOME
		</Link>
	</div>
);

export default NoMatch;
