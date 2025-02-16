import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import "../styles/chat.css";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
      setChat(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      await addDoc(collection(db, "messages"), { text: message, timestamp: Date.now() });
      setMessage("");
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <div>
      <h2>Live Chat</h2>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
