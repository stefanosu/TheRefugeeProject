import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/Users.js'
import currentUser from './reducers/CurrentUser.js'
import loginForm from './reducers/LoginForm.js'
import userChannel from './reducers/UserChannel.js'



const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm, 
    userChannel 
}) 


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))




export default store 