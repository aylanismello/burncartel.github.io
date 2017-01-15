import React from 'react';

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

	const childElements = dummyImages.map((element, idx) => {
		return (
			<div className="row track-container">
				<div className="col-sm-6 col-md-4">
					<div className="thumbnail">
						<div className="artwork-wrapper">
							<img
								src={element}
								className="artwork-icon"
							/>
							<img
								src='http://wptf.com/wp-content/uploads/2014/05/play-button.png'
								className="artwork-play"
							/>
							<span className="glyphicon glyphicon-play-circle"/>
						</div>
						<div className="caption">
							<h3 className="track-title">Song Title here</h3>
							<p>Posted by n curators</p>
							<p>
								<a href="#" className="btn btn-primary" role="button">Button</a>
								<a href="#" className="btn btn-default" role="button">Button</a>
							</p>
						</div>
					</div>
				</div>
			</div>

		);
	});

	return (
		<div>
			{childElements}
		</div>
	);

};

export default Feed;
