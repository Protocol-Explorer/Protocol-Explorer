import React, { useState } from 'react';
import styles from '@/styles/GameInterface.module.css'

const GameInterface = () => {
  const [messages, setMessages] = useState([
    // Initial dummy data, you'd have these coming from your game logic
    { id: 1, text: 'Welcome to the game.' },
    { id: 2, text: 'Plotting new coordinates.' },
    // ... more messages
  ]);

  const addMessage = (text:string) => {
    const newMessage = { id: messages.length + 1, text };
    setMessages([...messages, newMessage]);
  };

  const handleButtonClick = () => {
    // Handle button click event, like showing a new message
    addMessage('New message from the game.');
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageList}>
        {messages.map((message) => (
          <div key={message.id} className={styles.message}>
            {message.text}
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleButtonClick}>
        Display System Message
      </button>
    </div>
  );
};

export default GameInterface;
