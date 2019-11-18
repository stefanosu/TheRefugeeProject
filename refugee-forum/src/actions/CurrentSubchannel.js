
///sync action creators 
export const createUserChannel = channel => {
    return {
        type: 'CREATE_USER_CHANNEL', 
        channel 
    }
}


export const getAllChannels = channel => {
    return {
        type: 'GET_ALL_CHANNELS', 
        channel 
    }
}
///Should all the CRUD actions pertaining to
// Subchannel be in the same action file??? maybe 2 actions per file?  


//async action creators CRUD ACTIONS: 
//create action to make post request to backend to persist subchannel to database.
    export const makeChannel = (updateChannelData) => {
        console.log('new subchannel created')
        return dispatch => {
            return fetch('http://localhost:3000/api/v1/makeChannel',{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(updateChannelData)
            })
            .then(resp => resp.json())
            .then(channel => {
                if(channel.error) {
                    alert(channel.error)
                } else {
                    dispatch(createUserChannel(channel))
                }
            })
            .catch(console.log)
        }
    }


///get request to read subchannel from db.
    export const getCurrentChannel = () => {
        console.log('Dispatching current channel')
        return dispatch => {
            return fetch('http://localhost:3000/api/v1/getCurrentChannel',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            // .then(console.log)
            .then(channel => {
                if(channel.error){
                    alert(channel.error)
                }else {
                    dispatch({type: 'GET_ALL_CHANNELS', channels: channel})
                }
            })
            .catch(console.log)
        }
    }


