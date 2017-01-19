import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home';
import BurnCartelCurated from './burn_cartel_curated';

// import components here
import AppContainer from './app_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={Home} />
          <Route path="/curated" component={BurnCartelCurated} />
        </Route>
  		</Router>
  	);
  }
}

export default AppRouter;
