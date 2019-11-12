export default (state = [], action) => {
    switch(action.type){
        case  'UPDATE_USER_CHANNEL': 
            return action.channel 
        default: 
            return state 
    }
}
    
