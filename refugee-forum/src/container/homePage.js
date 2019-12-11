import React from 'react'; 
import SideBar from '../presentational/SideBar'
import NavBar from './NavBar.js';
import { connect } from 'react-redux'
import {getCurrentUser} from '../actions/CurrentUser.js'
import SubChannel from './SubChannel.js'


class HomePage extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser()
        // this.props.getCurrentChannel() 
            
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
                <NavBar/>
                <SubChannel/>
                <SideBar/>
            </div> 
            );
    }
}


const mapDispatchToProps = {
    // getCurrentChannel,
    getCurrentUser
}


const mapStateToProps = state => ({
    // channels: state.channels, 
    users: state.users 
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);