import React from 'react';
import homePage from './homePage';
import searchBar from './searchBar';

class navBar extends React.Component {
    
    state = {  }

    render() { 
        return ( <div>
            Navbar
            <homePage/>
            <searchBar/>
        make clickable icon for this on navBar// <myProfile/>
        make clickable icon for this on navBar// <userSettings/>
        make clickable icon for this on navBar// <logOut/>
            </div>);
    }
}
export default navBar;