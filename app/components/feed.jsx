import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
	transitionDuration: 0
};


const dummyImages = [
	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg',
	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg',
	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg',
	'https://i1.sndcdn.com/artworks-000201810345-8gnucx-large.jpg',
	'https://i1.sndcdn.com/artworks-000201417032-j18ns2-large.jpg',
	'https://i1.sndcdn.com/artworks-000201298954-kdopn1-large.jpg'
];

const Feed = (props) => {

	const childElements = dummyImages.map(function(element, idx) {
		return (
			<div
				className="image-element-class jumbotron"
				key={`${element}-${idx}-div`}
			>
				{/* <span> OH HAI {elementK}! </span> */}
				<img key={`${element}-${idx}-image`} src={element}/>
			</div>
		);
	});

	return (
		<Masonry className={'my-gallery-class'} // default ''
			elementType={'ul'} // default 'div'
			options={masonryOptions} // default {}
			disableImagesLoaded={false} // default false
			updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
		>
			{childElements}
		</Masonry>
	);

};

export default Feed;
