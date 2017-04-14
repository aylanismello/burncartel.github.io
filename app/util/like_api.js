import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/likes/';

const defaultCB = (data) => console.log(`received ${data}`)

export const postLike = ({ create }, track_id, user_id, success = defaultCB, error = defaultCB) => {

  const endpoint = create ? 'create' : 'destroy';

  $.ajax({
    url: `http://localhost:3000/api/v1/likes/${endpoint}`,
    method: 'POST',
    data: { track_id, user_id },
    success: (user) => {
      success(user);
    },
    error: (err) => {
      error(err);
    }
  });
};
