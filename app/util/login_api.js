import $ from 'jquery';

export const connectFB = () => {
  $.ajax({
    url: `${window.location.protocol}//connect.facebook.net/en_US/all.js`,
    dataType: 'script',
    cache: true
  });
}

export const getFBUser = (success) => {
  FB.api('/me', {fields: 'first_name,last_name,email'}, (response) => {
    let data = {};
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
      success: (user) => {
        success(user);
      },
      error: (err) => {
        console.log(err);
      }
    });
  });
}
