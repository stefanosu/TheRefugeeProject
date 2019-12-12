import React from 'react';
import SearchBar from './SearchBar';
import LogIn from '../presentational/LogIn';
import LogOut from '../presentational/LogOut';
import UserSettings from '../presentational/UserSettings';
import MyProfile from '../presentational/MyProfile'
import {connect} from 'react-redux'
    


const NavBar = ({currentUser}) => {
    // if(currentUser != null){
    // console.log(currentUser.data.attributes.username)
    // }
    return (
        <div className='Navbar'>
        { currentUser ? `Welcome, ${currentUser.data.attributes.username}` : ''} 
        <SearchBar/>
        <UserSettings/>
        <MyProfile/>
        </div>
    )
}

    const mapStateToProps = ({currentUser}) => {
        return {
            currentUser
        }
    }

    

export default connect(mapStateToProps) (NavBar)
        