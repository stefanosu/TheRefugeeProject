import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
// import { connect } from 'react-redux'
import HomePage from './container/HomePage.js';


class App extends React.Component {

  // componentDidMount() {
  //   // console.log(this.props.getCurrentUser);
  //   if(localStorage.token){
  //     this.props.getCurrentUser()
  //   }
  // }

  render() {
    return ( 
      <div>
      <Route path= '/' component={HomePage}/>
      </div>
      );
  }
}

export default App
// export default connect(null, { getCurrentUser}) (App);
