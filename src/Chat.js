import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';

function Chat() {

    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        // Firebase magic here..

        setInput('');
    }

    return (
        <div className='chat'>
            
            <div className="chat__header">
                <h4>
                    To: <span>Channel name</span>
                </h4>
                <strong>Details</strong>
            </div>

            {/* Add chat messages here */}
            <div className="chat__messages">
                <h2>I am a message</h2>
            </div>

            <div className="chat__input">
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='iMessage' type='text' />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className='chat__mic' />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
