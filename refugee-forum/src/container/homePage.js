import React from 'react'; 

class homePage extends React.Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div>HomePage
                <infiniteScroll/>
                <sideBar/>
            </div> );
    }
}

export default homePage;