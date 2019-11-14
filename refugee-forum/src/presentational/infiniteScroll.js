import React from 'react';
import SubChannel from '../container/SubChannel.js'

class InfiniteScroll extends React.Component {


    render() { 
        return ( 
            <React.Fragment> 
                <SubChannel/>
            Will display users subchannels, posts, and comments.
            </React.Fragment>
        )                
    }
}

export default InfiniteScroll;