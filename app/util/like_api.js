import $ from 'jquery';
import { ENV } from './helpers';

const { host, port } = ENV;


const defaultCB = (data) => console.log(`received ${data}`)

export const postLike = ({ create }, track_id, user_id, success = defaultCB, error = defaultCB) => {

  const endpoint = create ? 'create' : 'destroy';

  $.ajax({
    url: `http://${host}:${port}/api/v1/likes/${endpoint}`,
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
