import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomeContainer from './home/home_container';
import BurnCartelCuratedContainer from './curated/burn_cartel_curated_container';
import TrackShowContainer from './track/track_show_container';
import UserShowContainer from './user/user_show_container';
import AppContainer from './app/app_container';


class AppRouter extends React.Component{

  render() {
  	return (
      // hurray! this onUpdate func fixes that stupid glitch
  		<Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={HomeContainer} />
          <Route path="/tracks/:id" component={TrackShowContainer} />
          <Route path="/users/:id" component={UserShowContainer} />
          <Route path="/curated" component={BurnCartelCuratedContainer} />
        </Route>
  		</Router>
  	);
  }
}

export default AppRouter;
