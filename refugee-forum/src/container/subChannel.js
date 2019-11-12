import React from 'react';
import Post  from './Post'
import { connect } from 'react-redux'
import  UserChannel from '../actions/UserChannel.js'

class SubChannel extends React.Component {

    handleClick = (e) => {
        console.log('clicked', e)            
    }

    handleSubmit = (e) => {
        //make post request to backend to persist subchannel info into the database and show on the UI  
    }

    render() { 
        return ( <div>
            <button onClick={(e) => this.handleClick}> </button>
                <form aria-label onSubmit={(e) => this.handleSubmit} type='text' name='name'> </form>
                
            </div> );
        }
    }

    mapStateToProps = state => {
        return { 

        }
    }



export default connect(mapStateToProps, UserChannel) (SubChannel);