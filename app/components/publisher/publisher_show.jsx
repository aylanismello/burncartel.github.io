import React from 'react';
import PublisherBanner from './publisher_banner';

class PublisherShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.updateFilters({ resource: 'publishers', id: this.props.id });
  }

  render() {
    if(this.props.loadingFeed || Object.keys(this.props.publisher).length === 0) {
      return <div>LOADING</div>
    } else {
      return (
        <div className='container track-show'>
          <PublisherBanner
            user={this.props.publisher}
          />
        </div>
      )
    }
  }
}

export default PublisherShow;
