import React from 'react';
import Post  from './Post'
import { connect } from 'react-redux'
import {updateUserChannel} from '../actions/UserChannel.js'
import {subchannel} from '../actions/CurrentSubchannel.js'


const SubChannel = ({updateUserChannel, channelData, subchannel }) => { 

    const handleClick = (e) => {
        /// In State toggle: boolean if clicked True then state changes and creates subchannel if False then return default state.   
        console.log('clicked', e)            
    }

    const handleSubmit = (e) => {
        //make post request to backend to persist subchannel info into the database and show on the UI
        //This should be done in the UserChannel in reducers 
    }

    const handleChannelChange = e => {
        const {name, value} = e.target
        const updateChannelData = {
            ...channelData, 
            [name]: value
        }
        updateUserChannel(updateChannelData)
    } 

    return ( 
        <React.Fragment> 
            <button onClick={handleClick}> </button>
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChannelChange} type='text' name='name' value={channelData.name}  />
                    <input type='submit' value= 'channelName'/>
                </form>
        </React.Fragment>
        )
    }


    const mapStateToProps = state => {
        return { 
            channelData: state.channelForm 
        }
    }



export default connect(mapStateToProps, {updateUserChannel, subchannel}) (SubChannel);