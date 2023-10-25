import React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import axios from 'axios';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = "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"

// async function sendrequest() {
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("my-url", "https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB,RUBKZT,USDKZT&key=20ea09d780dc8e817b0d11ec03d6c9e5");

//     const options = {
//       method: 'POST',
//       url: 'https://cors-proxy3.p.rapidapi.com/api',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'X-RapidAPI-Key': '7615bbafd1msh92c37a9e2b8f1a7p121251jsn171bd390d93d',
//         'X-RapidAPI-Host': 'cors-proxy3.p.rapidapi.com'
//       },
//       data: encodedParams
//     };

//     axios.request(options).then(function (response) {
//     //   setСurrencies(response.data.data);
//     }).catch(function (error) {
//     //   setError(true);
//       console.error(error);
//     }).finally(function () {
//     //   setLoading(false)
//         console.log('Success');
//     });
//   }

//   sendrequest()


export default function ChatPage() {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm ChatGPT! Ask me anything!",
            sentTime: "just now",
            sender: "ChatGPT",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSendRequest = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user",
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await processMessageToChatGPT([...messages, newMessage]);
            const content = response.choices[0]?.message?.content;
            if (content) {
                const chatGPTResponse = {
                    message: content,
                    sender: "ChatGPT",
                };
                setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
            }
        } catch (error) {
            console.error("Error processing message:", error);
        } finally {
            setIsTyping(false);
        }
    };

    async function processMessageToChatGPT(chatMessages) {
        const apiMessages = chatMessages.map((messageObject) => {
            const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role, content: messageObject.message };
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "system", content: "I'm a Student using ChatGPT for learning" },
                ...apiMessages,
            ],
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        });

        return response.json();
    }


    return (
        <div style={{ textAlign: 'justify' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'white',
                    borderRadius: 1,
                }}
            >
                <div style={{ position: "relative", height: "400px", width: "700px" }}>
                    <MainContainer>
                        <ChatContainer>
                            <MessageList
                                scrollBehavior="smooth"
                                typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing..." /> : null}
                            >
                                {messages.map((message, i) => {
                                    console.log(message)
                                    return <Message key={i} model={message} />
                                })}
                            </MessageList>
                            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </Box>
            <div>

            </div>

        </div>
    )
}