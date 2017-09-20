import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
import LocationShowContainer from './location/location_show_container';
import LocationIndexContainer from './location/location_index_container';
import PlaylistShowContainer from './playlist/playlist_show_container';
import redirectOnLogout from './hoc/redirect_on_logout';
import NoMatch from './no_match';
import AppContainer from './app/app_container';
import { Container } from 'semantic-ui-react';

const AppRouter = () =>
	(<Router>
		<ScrollToTop>
			<AppContainer />
			<Switch>
				<Route exact path="/" component={HomeContainer} />
				{/* <Route exact path="/bc" component={redirectOnLogout(ExploreContainer)} />
					<Route exact path="/hot" component={ExploreContainer} />
					<Route exact path="/remix" component={ExploreContainer} />
					<Route exact path="/bc_publishers" component={ExploreContainer} />
					<Route exact path="/mix" component={ExploreContainer} />
					<Route exact path="/liked" component={ExploreContainer} />
					<Route exact path="/not" component={ExploreContainer} />
					<Route exact path="/latest" component={ExploreContainer} /> */}
				<Route exact path="/help" component={Help} />
				<Route exact path="/playlists/:id" component={PlaylistShowContainer} />
				<Route path="/publishers/:id" component={PublisherShowContainer} />
				<Route path="/tracks/:id" component={TrackShowContainer} />
				<Route path="/curators/:id" component={CuratorShowContainer} />
				<Route path="/tags/:id" component={TagShowContainer} />
				<Route path="/search" component={SearchShowContainer} />
				<Route path="/me/likes" component={LikesShowContainer} />
				<Route path="/me/feed" component={UserFeedShowContainer} />
				<Route path="/me" component={UserHomeContainer} />
				<Route path="/curated" component={BurnCartelCurated} />
				<Route path="/locations/:id" component={LocationShowContainer} />
				<Route path="/locations" component={LocationIndexContainer} />
				<Route component={NoMatch} />
			</Switch>
		</ScrollToTop>
	</Router>);

export default AppRouter;
