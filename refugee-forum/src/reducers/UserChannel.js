export default (state = [], action) => {
    switch(action.type){
        case  'CREATE_USER_CHANNEL': 
            let stateChannel = [...state, action.payload]
                return state
        
        case 'UPDATE_USER_CHANNEL':
                stateChannel = state.map((channel) => {
                    const {name, id} = action.payload
                        if(channel.id === id){
                            channel.name = name
                        }
                    return channel
                })
                return stateChannel

        case 'DELETE_USER_CHANNEL':
                stateChannel = state.filter(y => y.id !== action.payload)
                    return stateChannel

        default: 
                return state 
            }
        }

