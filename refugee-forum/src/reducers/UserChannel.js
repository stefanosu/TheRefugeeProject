export default (state = [], action) => {
    switch(action.type){
        case  'CREATE_USER_CHANNEL': 
            return action.channel
        default: 
            return state 
    }
}
    
