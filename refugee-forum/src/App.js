import React from 'react';
import NavBar from './container/NavBar'
import { connect } from 'react-redux'
import { getCurrentUser} from './actions/currentUser.js'
// import LogIn from './presentational/LogIn.js'

class App extends React.Component {

  componentDidMount() {
    // console.log(this.props.getCurrentUser);
    this.props.getCurrentUser()
  }

  render() { 
    return ( <div>
      <NavBar/>
      </div> );
  }
}

export default connect(null, { getCurrentUser}) (App);
