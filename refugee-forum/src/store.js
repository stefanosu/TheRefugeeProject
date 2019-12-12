import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/Users.js'
import currentUser from './reducers/CurrentUser.js'
import loginForm from './reducers/LoginForm.js'
import subChannel from './reducers/SubChannel.js'
import signupForm from './reducers/signupForm.js'


const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm, 
    subChannel,
    signupForm 
}) 


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))




export default store 