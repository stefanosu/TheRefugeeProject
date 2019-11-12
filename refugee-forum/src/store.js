import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import usersReducer from './reducers/Users.js'
import thunk from 'redux-thunk'
import currentUser from './reducers/CurrentUser.js';
import loginForm from './reducers/LoginForm.js'



const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm
}) 


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))




export default store 