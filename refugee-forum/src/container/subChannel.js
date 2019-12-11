import React from 'react';
import { connect } from 'react-redux'
import SubChannelCards from './SubChannelCards'
// import '../App.css'


const SubChannel = ({currentUser}) => {
if(currentUser != null){
    // console.log(currentUser.data.attributes.subchannels)
        
var subChannelCards = currentUser.data.attributes.subchannels.map(channel => <SubChannelCards channel={channel}key={channel.id} />)
}
    return (
        <div className="wrapper">
            <h1>SubChannels</h1>
            {subChannelCards}
        </div>
    )
}

// const SubChannel = ({channelData, updateUserChannel, makeChannel}) => { 

//     const handleClick = (e) => {
//         //In State toggle: boolean if clicked True then 
//         //state changes and creates subchannel if False 
//         //then return default state.
//         //This boolean needs to be dispatched to the store
//         // onClick create channel and form pops up to input
//         //name of channel. 
//         console.log('clicked', e)            
//     }

//     const handleChannelChange = e => {
//         const {name, value} = e.target
//         const updateChannelData = {
//             ...channelData, 
//             [name]: value
//         }
//         updateUserChannel(updateChannelData)
//     } 
    
//     const handleSubmit =  e => {
//     e.preventDefault() 
//         makeChannel(channelData)
//         //make post request to backend to persist subchannel info into the database and show on the UI
//         //This should be done in the UserChannel in reducers 
//     }

//     return ( 
//         <React.Fragment> 
//             <button onClick={handleClick}> </button>
//                 <form onSubmit={handleSubmit} >
//                     <input onChange={handleChannelChange} type='text' name='name' value={channelData.name}  />
//                     <input type='submit' value= 'channel'/>
//                 </form>
//         </React.Fragment>
//         )
//     }


//     const mapStateToProps = state => {
//         return { 
//             channelData: state.channelForm,

//         }
// //     }
    const mapStateToProps = ({currentUser}) => {
        return {
            currentUser
        }
    }


export default connect(mapStateToProps) (SubChannel)

// export default connect(mapStateToProps, {updateUserChannel, makeChannel}) (SubChannel);