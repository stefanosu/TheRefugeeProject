import React from 'react';
import SearchBar from './SearchBar';
import SignUp from './SignUp';
// import LogIn from '../presentational/LogIn';
// import LogOut from '../presentational/LogOut';
import UserSettings from '../presentational/UserSettings';
import MyProfile from '../presentational/MyProfile'
import {Route} from 'react-router-dom'

    

    const NavBar = () => {
    return (
        <div>
            <Route path= '/SignUp' component={SignUp}/>
                <SearchBar/>
                <UserSettings/>
                <MyProfile/>
            <Route/>
            
        </div>
    )
}

export default NavBar
        