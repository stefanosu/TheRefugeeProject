import React from 'react';
import SearchBar from './SearchBar';
import UserSettings from '../presentational/UserSettings';
import LogOut from '../presentational/LogOut';
import MyProfile from '../presentational/MyProfile'
import SignUp from './SignUp';
import LogIn from './LogIn';

class NavBar extends React.Component {
    

    render() { 
        return ( <div>
            Navbar
            make clickable icon for this on navBar// <SignUp/> 
            make clickable icon for this on navBar//<LogIn/>
            make form for this on the Searchbar component that will be displayed on Navbar<SearchBar/>
            make clickable icon for this on navBar// <MyProfile/>
            make clickable icon for this on navBar// <UserSettings/>
            make clickable icon for this on navBar// <LogOut/>
            </div>);
    }
}
export default NavBar;