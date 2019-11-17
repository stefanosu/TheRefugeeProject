import React from 'react'; 
import SideBar from '../presentational/SideBar'
import NavBar from './NavBar.js';
// import LogIn from '../presentational/LogIn'
// import LogOut from '../presentational/LogOut';
import { connect } from 'react-redux'
import { getCurrentChannel } from '../actions/CurrentSubchannel.js'


class HomePage extends React.Component {
    componentDidMount() {
        // console.log(this.props.getCurrentUser);
            this.props.getCurrentChannel()
            
    }

    render() { 
        console.log(this.props)
        return ( 
            <div>
            <NavBar/>
            <SideBar/>
            </div> 
            );
    }
}


const mapDispatchToProps = {
    getCurrentChannel: getCurrentChannel
}


const mapStateToProps = state => ({
    channels: state.channels
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);