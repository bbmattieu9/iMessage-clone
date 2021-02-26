import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

function Message({ id, 
                   contents, }) 
                   {
    return (
        <div className='message'>
            <Avatar  />
            <p>I am the message!</p>
            {/* <small>{new Date(timestamp?.toDate()).toLocaleString()}</small> */}
        </div>
    )
}

export default Message
