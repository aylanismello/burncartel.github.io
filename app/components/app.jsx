import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';
import Select from 'react-select';
import * as FontAwesome from 'react-icons/lib/fa/';

import FeedContainer from './feed_container';
import 'react-select/dist/react-select.css';

class App extends React.Component {
  constructor(props) {
  	super(props);
    props.fetchTracks();
  }

  onSelectChange(option) {
    // console.log(`Selected ${option.value}: ${option.label}`);
    this.props.updateFilter(option.value);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentFilter !== nextProps.currentFilter) {
      console.log('props changed!');
      this.props.fetchTracks(nextProps.currentFilter);
    }
  }

  render() {
    const options = ['hot', 'not', 'influential'].map((filter) => {
      return { value: filter, label: filter };
    });


    console.log(this.props.currentFilter);

  	return (
  		<div>
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Burn Cartel</a>

          <div className="collapse navbar-collapse" id="navbarCollapse">

              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>

            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

          </div>

        </nav>

        <div className="container">
          <Select
            name='form-field-name'
            value={this.props.currentFilter}
            options={options}
            onChange={this.onSelectChange.bind(this)}
            />
          <FeedContainer elements={['dope', 'as', 'fuck']}/>
        </div>



        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse bc-menu">

          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">PLAY</button> */}
          <FontAwesome.FaGlobe />

        </nav>
			</div>
      );
    }
  }

  export default App;
