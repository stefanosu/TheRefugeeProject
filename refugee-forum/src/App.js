import React from 'react';
import './App.css'
import HomePage from './container/HomePage.js';


class App extends React.Component {


  // componentDidMount() {
  //     this.props.getCurrentChannel()
  //   }
  

  render() {
    return ( 
      <div>
      <HomePage/>
      </div>
      );
  }
}

export default App
// export default connect(null, { getCurrentUser}) (App);
