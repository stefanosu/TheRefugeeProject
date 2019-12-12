import './App.css'
import HomePage from './container/HomePage.js';
import React from 'react'; 
import SideBar from './presentational/SideBar'
import NavBar from './container/NavBar.js';
import { connect } from 'react-redux'
import {getCurrentUser} from './actions/CurrentUser.js'
import LogIn from './presentational/LogIn'; 
import { Route } from 'react-router-dom'
import SubChannel from './container/SubChannel';
import SignUp from './container/SignUp'

class App extends React.Component {
    
    componentDidMount() {
      // debugger
      this.props.getCurrentUser()
      // this.props.getCurrentChannel() 
    }
    
  
      render() { 
        const {loggedIn} = this.props
          return ( 
              <React.Fragment>
                <NavBar/>
                  <Route exact path='/login' component={LogIn}/>
                  <Route exact path='/' render={()=> loggedIn ? <SubChannel/> : <HomePage/>}/>
                  <Route exact path='/signup' component={SignUp}/>
                  <Route exact path='/subchannel' component={SubChannel}/>
                <SideBar/>
                  </React.Fragment> 
              );
      }
    }
  
  
  const mapDispatchToProps = {
      getCurrentUser
  }
  
  
  const mapStateToProps = state => ({
      loggedIn: !!state.currentUser 
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);


