import React, { useState } from 'react';
import './App.css';
import { IoSend } from "react-icons/io5";

const App = () => {
    const [question, setQuestion] = useState('');
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question.trim() === '') return;

        // Добавление вопроса пользователя
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: question, isUser: true },
        ]);

        // Ответ системы
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: `Это тестовый ответ на вопрос "${question}"`, isUser: false },
        ]);

        setQuestion(''); // Очистить поле ввода
    };

    return (
        <div className="App">
            <h1>Чат</h1>

            <div className="chat-box">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.isUser ? 'user-message' : 'system-message'}`}
                    >
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="input-form">
        <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Введите ваш вопрос"
        />
                <button type="submit"><IoSend /></button>
            </form>
        </div>
    );
};

export default App;
