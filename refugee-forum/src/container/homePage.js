import React from 'react'; 
import SideBar from '../presentational/SideBar'
import NavBar from './NavBar.js';
import { connect } from 'react-redux'
import {getCurrentUser} from '../actions/CurrentUser.js'
import LogIn from '../presentational/LogIn';
import { Route } from 'react-router-dom'
import SubChannel from './SubChannel';
import SignUp from './SignUp'


class HomePage extends React.Component {
  
  componentDidMount() {
    // debugger
    this.props.getCurrentUser()
    // this.props.getCurrentChannel() 
  }
      
    // allTheChannels = ({currentUser}) => {
    //   currentUser.data.attributes.subchannels.map(channel => <li channel={channel.name} key={channel.id} />)
    // }  
          

    render() { 
        // console.log(this.props)
        return ( 
            <React.Fragment>
              <NavBar/>
                  <Route exact path='/login' component={LogIn}/>
                  <Route exact path='/signup' component={SignUp}/>
                  <Route exact path='/subchannel' component={SubChannel}/>
                <SideBar/>
                </React.Fragment> 
            );
    }
  }


const mapDispatchToProps = {
    // getCurrentChannel,
    getCurrentUser
}


// const mapStateToProps = currentUser => ({
//     // users: state.users,
//     currentUser 
// })

export default connect(null, mapDispatchToProps)(HomePage);