import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MessageEdit = () => {
    const [messages, setMessages] = useState([]);
    const [editedMessage, setEditedMessage] = useState("");
    const [editMessageId, setEditMessageId] = useState(null);

    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)

    const navigate = useNavigate()

    useEffect(() => {
        // Fetch messages from the API endpoint
        fetch("http://localhost:8088/messages?_expand=user")
            .then((response) => response.json())
            .then((messageArray) => {
                setMessages(messageArray);
            });
    }, []);

    const getAllMessages = () => {
        fetch("http://localhost:8088/messages?_expand=user")
            .then((response) => response.json())
            .then((messageArray) => {
                setMessages(messageArray);
            });
    }

    const handleEditClick = (messageId) => {
        const selectedMessage = messages.find((message) => message.id === messageId);
        if (selectedMessage) {
            setEditedMessage(selectedMessage.msg);
            setEditMessageId(messageId);
        }
    };

    const handleSaveEdit = (messageId) => {
        // Update the message with the edited text
        const updatedMessages = messages.find((message) => message.id === messageId);
        // setMessages(updatedMessages);
        // setEditedMessage(""); // Clear the edited message text
        // setEditMessageId(null); // Clear the edit message ID
       
       
       
       
        const messageToSendToAPI = {
            userId: helpAppUserObject.id,
            userName: "Kari",
            alertDateTime: "2023-11-17T15:03:12.618Z",
            familyId: helpAppUserObject.familyId,
            msg: editedMessage
        }

        
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSendToAPI)
        })
            .then(response => response.json())
            .then(setEditedMessage(""))
            .then(setEditMessageId(null))
            .then(getAllMessages())
            .then(() => {
                // navigate("/")
            })
    };




    return (
        <>
            {messages.map((message) => (
                <div key={message.id}>
                    {editMessageId === message.id ? (
                        <>
                            <input
                                type="text"
                                value={editedMessage}
                                onChange={(e) => setEditedMessage(e.target.value)}
                            />
                            <button onClick={() => handleSaveEdit(message.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <p>{message.msg}</p>
                            <button onClick={() => handleEditClick(message.id)}>Edit Me</button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};