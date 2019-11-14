
///sync action creator to UpdateChannel 
export const updateUserChannel = channel => {
    return {
        type:'UPDATE_USER_CHANNEL', 
        payload: channel
    }  
}


///async action creator UpdateChannel  

export const updateChannel = channelID => {
    console.log('updated userChannel', channelID)
    return dispatch => {
        ///need userId in fetch to delete the specific users channel duh
        return fetch(`http://localhost:3000/api/v1/udpateChannel`,{
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            }, 
                body: JSON.stringify(channelID)
        })
        .then(resp => resp.json())
        .then(channel => {
            if(channel.error){
                alert(channel.error)
            }else {
                dispatch(updateUserChannel(channel))
            }
        })
        .catch(console.log)
    }
}


///sync action creator to DeleteChannel 
    export const deleteUserChannel = ID => {
        return {
            type: 'DELETE_USER_CHANNEL',
            payload: ID 
        }
    }



///async action creator DeleteChannel 
    export const destroyChannel = ID => {
        return dispatch => {
            ///Need users id to delete specific users channel 
            return fetch(`http://localhost:3000/api/v1/destroyChannel#{user.id}`,{
                method: 'DELETE', 
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch(deleteUserChannel(ID))
        }
    }

