import React from 'react'
// import {connect} from 'react-redux';
// import {userPostFetch} from '../redux/actions';

class SignUp extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault()
    }

    render() { 
        return ( 
<React.Fragment>
    <h1>Sign Up For An Account</h1>
        <label>Username</label>
                <input
                name='username'
                placeholder='Username'
                value= ''
                onChange={this.handleChange}
                /><br/>

        <label>Password</label>
            <input
                type='password'
                name='password'
                placeholder='Password'
                value= ''
                onChange={this.handleChange}
            /><br/>
            <input onSubmit={this.handleSubmit} type='submit' />

</React.Fragment> 
            );
    }
}

export default SignUp ;

// const mapDispatchToProps = dispatch => ({
//     userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
//     })

// export default connect(null, mapDispatchToProps)(Signup);
