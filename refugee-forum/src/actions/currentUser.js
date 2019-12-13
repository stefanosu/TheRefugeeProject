import {resetLoginForm} from './LoginForm.js'
import { getAllChannels } from './SubChannel.js'
import {resetSignupForm} from './signupForm.js'


///sync action creators
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
} 

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }
}


///async action creators 
export const login = (credentials, history) => {
    console.log('credentials are here', credentials);
    return dispatch => {
        // debugger
        return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
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
                // localStorage.token = user.token
                // console.log(user.data)
                dispatch(setCurrentUser(user))
                dispatch(resetSignupForm())
                dispatch(getAllChannels(user.data))
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    console.log('credentials are here', credentials);
    return dispatch => {
        // debugger
        return fetch("http://localhost:3000/api/v1/signup", {
        credentials: "include",
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
                // localStorage.token = user.token
                // console.log(user.data)
                dispatch(setCurrentUser(user))
                dispatch(resetLoginForm())
                dispatch(getAllChannels(user.data))
                history.push('/') 
            }
        })
        .catch(console.log)
    }
}


export const logout = () => {
    console.log('loggedOut!!!')
    return dispatch => { 
        dispatch(clearCurrentUser())
        fetch("http://localhost:3000/api/v1/logout", {
            credentials: 'include',
            method: 'DELETE'
        }) 
    }
}


export const getCurrentUser = () => {
    console.log('DISPATCHING GET CURRENT USER');
    return dispatch => {
        // debugger 
        // const token = localStorage.token
        return fetch("http://localhost:3000/api/v1/get_current_user", {
        credentials: "include",    
        method: 'GET', 
        headers: {
            "Content-type": "application/json"
            },
        })
        .then(resp => resp.json())
        // .then(console.log => {
        .then(user =>{
            // debugger
            if(user.error) {
                alert(user.error)
            } else {
                // localStorage.setItem("token",user.credentials)
                // localStorage.token = user.token
                dispatch(setCurrentUser(user))
                dispatch(getAllChannels(user.data))
            }
        })
        .catch(console.log)
    }
}



