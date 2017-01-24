import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomeContainer from './home_container';
import BurnCartelCurated from './burn_cartel_curated';
import TrackShowContainer from './track_show_container';
import UserShowContainer from './user_show_container';
import AppContainer from './app_container';


class AppRouter extends React.Component{

  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={HomeContainer} />
          <Route path="/tracks/:id" component={TrackShowContainer} />
          <Route path="/users/:id" component={UserShowContainer} />
          <Route path="/curated" component={BurnCartelCurated} />
        </Route>
  		</Router>
  	);
  }
}

export default AppRouter;
