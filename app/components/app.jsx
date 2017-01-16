import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';
import FeedContainer from './feed_container';

class App extends React.Component {
  constructor(props) {
  	super(props);
    props.fetchTracks();
  }

  render() {
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
          {/* <div className="jumbotron"> */}
            <FeedContainer elements={['dope', 'as', 'fuck']}/>
            {/* <h1>Track One</h1>
            <h2>Artist A</h2>
            <p className="lead">This is where all of our React Modals go.... let's separate styling and functionality for the love of god..</p>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">PLAY</button> */}
          {/* </div> */}
        </div>



        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">PLAY</button>
        </nav>
			</div>
      );
    }
  }

  export default App;
