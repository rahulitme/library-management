import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Load chat history
        socket.on('chatHistory', (history) => {
            setMessages(history);
        });

        // Listen for new messages
        socket.on('newMessage', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off('chatHistory');
            socket.off('newMessage');
        };
    }, []);

    const handleSendMessage = () => {
        const message = {
            user: 'User1', // You can replace this with dynamic user data
            text: input,
            timestamp: new Date(),
        };
        socket.emit('newMessage', message);
        setInput(''); // Clear input field
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.user}:</strong> {msg.text} <small>({new Date(msg.timestamp).toLocaleTimeString()})</small>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatBox;
