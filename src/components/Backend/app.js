const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Temporary in-memory storage for messages
const messages = [];

// Socket.IO connection for real-time chat
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Send the chat history to the newly connected user
    socket.emit('chatHistory', messages);

    // Listen for new messages from clients
    socket.on('newMessage', (message) => {
        messages.push(message); // Store the message in memory
        io.emit('newMessage', message); // Broadcast to all connected clients
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
