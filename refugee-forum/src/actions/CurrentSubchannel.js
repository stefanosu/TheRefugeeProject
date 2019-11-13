
///sync action creators 
export const createUserChannel = channel => {
    return {
        type: 'CREATE_USER_CHANNEL', 
        channel 
    }
}


///Should all the CRUD actions pertaining to
// Subchannel be in the same action file??? maybe 2 actions per file?  



//async action creators CRUD ACTIONS: 
//create action to make post request to backend to persist subchannel to database.
    export const makeChannel = () => {
        console.log('new subchannel created')
        return dispatch => {
            return fetch('http://localhost:3000/api/v1/makeChannel',{
                method: 'POST', 
                headers: {
                    'CONTENT-TYPE': 'application/json'
                }, 
                body: JSON.stringify(name, user_id)
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
            .then(channel => {
                if(channel.error){
                    alert(channel.error)
                }else {
                    dispatch(createUserChannel(channel))
                }
            })
            .catch(console.log)
        }
    }

//make patch request to update/edit subchannel to modify subchannel from db. 
//make delete request to remove subchannel from db.
        

