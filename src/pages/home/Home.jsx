import React, { useState, useEffect } from 'react';
import MessageBlock from '../../components/chat/MessageBlock';
import './HomeStyle.css';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    //states for page
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [socket, setSocket] = useState(null);


    //establish connection
    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:3001');
        setSocket(newSocket);

        // Return a cleanup function that only closes the WebSocket when the component unmounts
        return () => {
            if (newSocket.readyState === WebSocket.OPEN) {
                newSocket.close();
            }
        };
    }, []);

    //get messages from server 
    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const response = event.data;
                setChat((prevChat) => [...prevChat, { text: response, sender: 'bot', userId: 2 }]);
            };
        }
    }, [socket]);


    //send messages to the server
    const handleSendMessage = () => {
        if (socket && message.trim() !== '') {
            setChat((prevChat) => [...prevChat, { text: message, sender: 'user', userId: 1 }]);
            socket.send(message);
            setMessage('');
        }
    };


    //set message state
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };


    return (
        <main>
            <div className="container">
                <div className="chatContainer">
                    {
                        chat.map((message, index) => (
                            <MessageBlock message={message.text} userId={message.userId} key={uuidv4()} />
                        ))
                    }
                </div>
                <div className="inputBoxContainer">
                    <textarea
                        className="inputBox"
                        placeholder="Please ask a question..."
                        value={message}
                        onChange={handleMessageChange}>
                    </textarea>
                    <button className="sendButton" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </main>
    )
}

export default Home;