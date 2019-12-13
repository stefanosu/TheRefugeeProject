import React from 'react'; 
// import SideBar from '../presentational/SideBar'
// import NavBar from './NavBar.js';
// import { connect } from 'react-redux'
// import {getCurrentUser} from '../actions/CurrentUser.js'
// import LogIn from '../presentational/LogIn';
// import { Route } from 'react-router-dom'
// import SubChannel from './SubChannel';
// import SignUp from './SignUp'
import {Link} from 'react-router-dom' 


const HomePage = () => (
    
    <div> 
      <span className='Signup-info'>   
        <Link to='/signup'>Sign Up </Link>OR<Link to='/login'>Log In </Link> </span>
    </div>
    )
  //   render() { 
  //       // console.log(this.props)
  //       return ( 
  //           <React.Fragment>
  //             <NavBar/>
  //                 <Route exact path='/login' component={LogIn}/>
  //                 <Route exact path='/signup' component={SignUp}/>
  //                 <Route exact path='/subchannel' component={SubChannel}/>
  //               <SideBar/>
  //               </React.Fragment> 
  //           );
  //   }
  // }


// const mapDispatchToProps = {
//     // getCurrentChannel,
//     getCurrentUser
// }


// const mapStateToProps = currentUser => ({
//     // users: state.users,
//     currentUser 


export default (HomePage);