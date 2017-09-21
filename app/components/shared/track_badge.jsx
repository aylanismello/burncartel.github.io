import React from 'react';
import { Label } from 'semantic-ui-react';

const TrackBadge = props => {
	let badgeText;

	const style = {};

	if (props.size) {
		style.fontSize = `${parseInt(props.size)}px`;
	}

	if (props.track.is_remix && props.track.is_bc) {
		badgeText = 'REMIX + BC PICK';
	} else if (props.track.is_remix){
		badgeText = 'REMIX';
	} else if (props.track.is_mix) {
		badgeText = 'MIX';
	} else if (props.track.is_bc) {
		badgeText = 'BC PICK';
	} else if (props.track.is_episode) {
		badgeText = 'BC RADIO';
	} else {
		badgeText = null;
	}

	if (badgeText) {
		return (
			// <span style={style} className="badge badge-default bc-badge">
			<Label basic style={style} >
				{badgeText}
			</Label>
		);
	} else {
		return null;
	}
};

export default TrackBadge;
