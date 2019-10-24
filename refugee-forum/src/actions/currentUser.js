
///sync action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
} 


///async action creators 
export const login = credentials => {
    console.log('credentials are here', credentials);
    return dispatch => {
        // debugger
        return fetch("http://localhost:3000/api/v1/login", {
        // credentials: "include",
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'  
            }, 
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user =>{
            if(user.error) {
                alert(user.error)
            } else {
                localStorage.token = user.token
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}


export const getCurrentUser = () => {
    console.log('DISPATCHING GET CURRENT USER');
    return dispatch => {
        // debugger 
        const token = localStorage.token
        return fetch("http://localhost:3000/api/v1/get_current_user", {
        // credentials: "include",
        method: 'GET', 
        headers: {
            "Authorization": token
            }
        })
        .then(resp => resp.json())
        // .then(console.log => {
        .then(user =>{
            // debugger
            if(user.error) {
                alert(user.error)
            } else {
                // localStorage.setItem("token",user.credentials)
                localStorage.token = user.token
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}



