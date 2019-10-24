import React from 'react';


class MyProfile extends React.Component {

    state = {
        username: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/myprofile', {
            headers: {
                Authorization: localStorage.token 
            }
        })
            .then(resp => resp.json())
            .then(profileData => {
                this.setState({username: profileData.username});
            })
        }

    render() { 
        return ( 
            <div>
            Welcome, {this.state.username}
            </div> );
    }
}

export default MyProfile;