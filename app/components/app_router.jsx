import React from 'react';
import {
  HashRouter as Router,
  Route,
  IndexRoute,
  hashHistory,
  Switch
} from 'react-router-dom';
import ScrollToTop from './scroll_to_top';
import HomeContainer from './home/home_container';
import BurnCartelCurated from './curated/burn_cartel_curated';
import TrackShowContainer from './track/track_show_container';
import CuratorShowContainer from './curator/curator_show_container';
import LikesShowContainer from './likes/likes_show_container';
import NoMatch from './no_match';
import AppContainer from './app/app_container';

class AppRouter extends React.Component{

  render() {
  	return (
  		<Router>
        <ScrollToTop>
          <AppContainer/>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/tracks/:id" component={TrackShowContainer} />
            <Route path="/users/:id" component={CuratorShowContainer} />
            <Route path="/likes/:id" component={LikesShowContainer} />
            <Route path="/curated" component={BurnCartelCurated} />
            <Route component={NoMatch}/>
          </Switch>
        </ScrollToTop>
  		</Router>
  	);
  }
}

export default AppRouter;
