import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';

const IconLink = ({ service, size = 40, href = '#' }) => {
  let icon;

  switch(service.toLowerCase()) {
    case 'instagram':
      icon =
      <FontAwesome.FaInstagram
        size={size}
        color="aliceblue"
        className="bc-icon"
      />;
      break;
    case 'twitter':
      icon =
      <FontAwesome.FaTwitter
        size={size}
        color="aliceblue"
        className="bc-icon"
      />;
      break;
    case 'facebook':
      icon =
      <FontAwesome.FaFacebook
        size={size}
        color="aliceblue"
        className="bc-icon"
      />;
      break;
    case 'soundcloud':
      icon =
      <FontAwesome.FaSoundcloud
        size={size}
        color="aliceblue"
        className="bc-icon"
      />;
      break;
    case 'youtube':
      icon =
      <FontAwesome.FaYoutube
        size={size}
        color="aliceblue"
        className="bc-icon"
      />;
      break;
    default:
      icon =
      <FontAwesome.FaTwitter
        size={size}
        color="aliceblue"
        className="bc-icon"
      />;
      break;
  }

  return (
    <a href={href} target='_blank'>
      {icon}
    </a>
  )

};

export default IconLink;
