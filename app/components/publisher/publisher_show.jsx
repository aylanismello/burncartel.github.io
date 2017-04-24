import React from 'react';

class PublisherShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.updateFilters({ resource: 'publishers', id: this.props.id });
  }

  render() {
    return (
      <div>
        <h1>hello🌎</h1>
      </div>
    )
  }
}

export default PublisherShow;
