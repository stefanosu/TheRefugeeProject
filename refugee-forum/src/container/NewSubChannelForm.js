import React from 'react'
import {updateNewSubChannelForm} from '../actions/newSubChannelForm'
import {connect} from 'react-redux'

const NewSubChannelForm = () => {
    
const handleChange = event => {
  event.preventDefault()
  const {name, value} = event.target
  updateNewSubChannelForm(name, value)
  }  

return ( 
      <div>
          <form>
            <input 
              name='name'
              onChange={handleChange}
              value={null}
            />
          </form>
      </div> );
}

  // const mapStateToProps = state => {
  //     state.newSubChannelForm
  // }

  // const mapDispatchToProps = {
  //     state: state.newSubChannelForm 
  // }

export default connect(NewSubChannelForm);