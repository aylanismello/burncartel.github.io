import React from 'react';
import { Label } from 'semantic-ui-react';


export const getBadgeText = (track) => {
	if (track.is_remix && track.is_bc) {
		return 'REMIX + BC PICK';
	} else if (track.is_remix){
		return 'REMIX';
	} else if (track.is_mix) {
		return 'MIX';
	} else if (track.is_bc) {
		return 'BC PICK';
	} else if (track.is_episode) {
		return 'BC RADIO';
	} else {
		return null;
	}
}

const TrackBadge = props => {
	const style = {};

	if (props.size) {
		style.fontSize = `${parseInt(props.size)}px`;
	}

	const badgeText = getBadgeText(props.track);

	if (badgeText) {
		return (
			<Label basic style={style} >
				{badgeText}
			</Label>
		);
	} else {
		return null;
	}
};

export default TrackBadge;
