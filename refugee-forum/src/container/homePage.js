import React from 'react'; 
import InfiniteScroll from '../presentational/InfiniteScroll'
import SideBar from '../presentational/SideBar'
import NavBar from './NavBar.js';

class HomePage extends React.Component {
    
    render() { 
        return ( 
            <div>
            HomePage
            <InfiniteScroll/>
            <SideBar/>
            <NavBar/>
            </div> 
            );
    }
}

export default HomePage;