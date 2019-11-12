import React from 'react';
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import LogIn from '../presentational/LogIn';
import UserSettings from '../presentational/UserSettings';
import LogOut from '../presentational/LogOut';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                Navbar
                make clickable SignUp icon for this on navBar// <SignUp/>
                make clickable LogIn icon for this on navBar//<LogIn />
                make SearchBar form for this on the Searchbar component that will be displayed on Navbar<SearchBar/>
                make clickable UserSettings icon for this on navBar// <UserSettings/>
                make clickable LogOut icon for this on navBar// <LogOut/>
                </div>
        );
    }
}
export default NavBar;
