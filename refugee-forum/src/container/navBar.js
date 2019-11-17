import React from 'react';
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import LogIn from '../presentational/LogIn';
import LogOut from '../presentational/LogOut';
import UserSettings from '../presentational/UserSettings';
import MyProfile from '../presentational/MyProfile'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

    

    const NavBar = ({currentUser}) => {
    return (
        <div className='NavBar'>
            <Route path= '/SignUp' component={SignUp}/>
                {currentUser ? <p>Welcome, {currentUser.username}</p> : '' }
                { currentUser ? <LogOut/> : <LogIn/>}
                <SearchBar/>
                <UserSettings/>
                <MyProfile/>
            <Route/>
        </div>
    )
}

    const mapStateToProps = ({currentUser}) => {
        return {
            currentUser
        }
    }

    


export default connect( mapStateToProps) (NavBar)
        