import React from 'react'; 
import InfiniteScroll from '../presentational/InfiniteScroll'
import SideBar from '../presentational/SideBar'
import NavBar from './NavBar.js';
// import LogIn from '../presentational/LogIn'
// import LogOut from '../presentational/LogOut';
import { connect } from 'react-redux'
import { getCurrentUser} from '../actions/CurrentUser.js'


class HomePage extends React.Component {
    componentDidMount() {
        // console.log(this.props.getCurrentUser);
        if(localStorage.token){
            this.props.getCurrentUser()
        }
    }

    render() { 
        return ( 
            <div>
            <NavBar/>
            <InfiniteScroll/>
            <SideBar/>
            </div> 
            );
    }
}

export default connect(null, { getCurrentUser}) (HomePage);
