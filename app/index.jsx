import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveCurrentUser } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {



  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);



  $('body').prepend('<div id="fb-root"></div>');
  $.ajax({
    url: `${window.location.protocol}//connect.facebook.net/en_US/all.js`,
    dataType: 'script',
    cache: true
  });

  window.fbAsyncInit = () => {
    FB.init({
      appId: '156389341554296',
      cookie: true
    });


    FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        console.log('Logged in.');
        let data = {};

        FB.api('/me', {fields: 'first_name,last_name,email'}, (response) => {
          console.log(response);
          data['last_name'] = response.last_name;
          data['first_name'] = response.first_name;
          data['id'] = response.id;
          data['email'] = response.email;

          $.ajax({
            url: 'http://localhost:3000/yo',
            method: 'POST',
            xhrFields: {
              withCredentials: true
            },
            data,
            success: (sux) => {
              store.dispatch(receiveCurrentUser(sux));
              console.log(sux);
            },
            error: (err) => {
              console.log(err);
            }
          });


        });
      }
    });

  };





});
