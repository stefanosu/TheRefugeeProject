import React from 'react'; 
import comments from '.container/comments'

class form extends React.Component {

    state = { 
        name: ''
    }

    
    handleChange = (event) => {
        const {name, value } = event.target 
            this.setState({
                [name] : value
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({

        })
    }

    render() { 
        return ( 
                <div>
                <form onSubmit={this.handleSubmit} className='Comments'> 
                    <form  onChange={this.handleChange} name= 'name' type='text' value=''> 
                    </form>
                </form>
                </div> );
    }
}

export default form
