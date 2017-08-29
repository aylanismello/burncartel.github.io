import React from 'react';
import {
	HashRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import ScrollToTop from './scroll_to_top';
import HomeContainer from './home/home_container';
import Help from './help';
import BurnCartelCurated from './curated/burn_cartel_curated';
import TrackShowContainer from './track/track_show_container';
import SearchShowContainer from './search/search_show_container';
import CuratorShowContainer from './curator/curator_show_container';
import TagShowContainer from './tag/tag_show_container';
import LikesShowContainer from './likes/likes_show_container';
import PublisherShowContainer from './publisher/publisher_show_container';
import UserFeedShowContainer from './user/user_feed_show_container';
import UserHomeContainer from './user/user_home_container';
import TravelerShowContainer from './traveler/traveler_show_container';
import TravelerIndexContainer from './traveler/traveler_index_container';
import NoMatch from './no_match';
import AppContainer from './app/app_container';

const AppRouter = () => (
	<Router>
		<ScrollToTop>
			<AppContainer />
			<Switch>
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/bc" component={HomeContainer} />
				<Route exact path="/hot" component={HomeContainer} />
				<Route exact path="/remix" component={HomeContainer} />
				<Route exact path="/bc_publishers" component={HomeContainer} />
				<Route exact path="/mix" component={HomeContainer} />
				<Route exact path="/liked" component={HomeContainer} />
				<Route exact path="/not" component={HomeContainer} />
				<Route exact path="/latest" component={HomeContainer} />
				<Route exact path="/help" component={Help} />
				<Route path="/publishers/:id" component={PublisherShowContainer} />
				<Route path="/tracks/:id" component={TrackShowContainer} />
				<Route path="/curators/:id" component={CuratorShowContainer} />
				<Route path="/tags/:id" component={TagShowContainer} />
				<Route path="/search" component={SearchShowContainer} />
				<Route path="/me/likes" component={LikesShowContainer} />
				<Route path="/me/feed" component={UserFeedShowContainer} />
				<Route path="/me" component={UserHomeContainer} />
				<Route path="/curated" component={BurnCartelCurated} />
				<Route path="/traveler/:id" component={TravelerShowContainer} />
				<Route path="/traveler" component={TravelerIndexContainer} />
				<Route component={NoMatch} />
			</Switch>
		</ScrollToTop>
	</Router>
);

export default AppRouter;
