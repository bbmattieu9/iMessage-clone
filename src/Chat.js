import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import MicNoneIcon from '@material-ui/icons/MicNone';
import './Chat.css';
import Message from './Message';
import { selectChatId, selectChatName } from './features/chatSlice';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db from './firebase';
import firebase from 'firebase';

function Chat() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
       if (chatId) {
           db.collection('chats').doc(chatId).collection('messages')
           .orderBy('timestamp', 'desc').onSnapshot(snapshot => (
               setMessages(snapshot.docs.map(doc => ({
                   id: doc.id,
                   data: doc.data()
               })))
           ))
       }
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault();

        // Firebase magic here..
        // db.collection('chats').doc(chatId).collection('messages').add({
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //     message: input,
        //     uid: user.uid,
        //     photo: user.photo,
        //     email: user.email,
        //     displayName: user.displayName
        // });

        setInput('');
    };

    return (
        <div className='chat'>
            
            <div className="chat__header">
                <h4>
                    To: <span>{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>

            {/* Add chat messages here */}
            <div className="chat__messages">
                {/* {messages.map(({ id, data }) => (
                    <Message key={id} contents={data} />
                ))}  */}

                <Message />
            </div>

            <div className="chat__input">
                <form>
                    <input 
                       
                        // onChange={(e) => setInput(e.target.value)}
                        value={input}
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
