import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components here
import AppContainer from './app_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={ AppContainer }>
          // Routes go here
        </Route>
  		</Router>
  	);
  }
}

export default AppRouter;
