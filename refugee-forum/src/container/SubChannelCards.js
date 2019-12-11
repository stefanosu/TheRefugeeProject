import React from 'react'
// import '../App.css'


const SubChannelCards = ({channel}) => {
    
        return(
                <div className='SubChannel-Card'>
                    These are the Channels:
                    <strong>{channel.name}</strong>
                </div>
            )
    }


    export default SubChannelCards