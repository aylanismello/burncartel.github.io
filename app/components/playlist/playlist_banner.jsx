import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';

const PlaylistBanner = ({ name, description, artwork_url, playlist_type, photo}) => {
  const image_url = photo ? photo.processed_regular : '';
  return (
      <Segment>
        <Grid>
          <Grid.Column width={4}>
            <Image size="medium" src={image_url} />
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
