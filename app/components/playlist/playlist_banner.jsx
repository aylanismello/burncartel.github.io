import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';

const PlaylistBanner = ({ name, description, artwork_url, photo, playlist_type}) => {
  return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image size="medium" src={photo ? photo.full : ''} />
          </Grid.Column>
          <Grid.Column width={12}>
            <h5> Part of the {playlist_type} series </h5>
            <h2> {name} </h2>
            <span> {description} </span>
          </Grid.Column>
        </Grid>
      </Segment>
  );
};

export default PlaylistBanner;
