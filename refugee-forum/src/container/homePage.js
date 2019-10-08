import React from 'react'; 
import InfiniteScroll from '../presentational/InfiniteScroll'
import SideBar from '../presentational/SideBar'

class HomePage extends React.Component {
    
    render() { 
        return ( 
            <div>
            HomePage
            <InfiniteScroll/>
            <SideBar/>
            </div> 
            );
    }
}

export default HomePage;