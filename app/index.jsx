import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
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
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
  };


  const store = configureStore();

});
