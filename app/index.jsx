import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { connectFB } from './util/login_api';
import { receiveCurrentUser } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {

  // prevent native gestures from interfering with touch-based devices UX
  // this prevents pinching to zoom for safari
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });

  connectFB();
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
