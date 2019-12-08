const initialState = {channels: []}

export default (state = initialState, action) => {
    switch(action.type){
        case  'GET_ALL_CHANNELS': 
            return action.channels

            // return {...state, channels: action.channels}

        // case 'UPDATE_USER_CHANNEL':
        //         stateChannel = state.map((channel) => {
        //             const {name, id} = action.payload
        //                 if(channel.id === id){
        //                     channel.name = name
        //                 }
        //             return channel
        //         })
        //         return stateChannel

        // case 'DELETE_USER_CHANNEL':
        //         stateChannel = state.filter(y => y.id !== action.payload)
        //             return stateChannel

        default: 
                return state 
            }
        }
