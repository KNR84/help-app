import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MessageEdit = () => {
  const [messages, setMessages] = useState([]);
  const [editedMessage, setEditedMessage] = useState("");
  const [editMessageId, setEditMessageId] = useState(null);

  const localhelpAppUser = localStorage.getItem("helpApp_user");
  const helpAppUserObject = JSON.parse(localhelpAppUser);

  const navigate = useNavigate();

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
        // Filter messages based on familyId
        const filteredMessages = messageArray.filter(
          (message) => message.user.familyId === helpAppUserObject.familyId
        );
        setMessages(filteredMessages);
      });
  };

  //////////////////////////////set interval useEffect to refresh page////////////////////////////////////////
  useEffect(() => {
    // Fetch messages from the API endpoint initially
    getAllMessages();

    // Set up an interval to fetch messages every 60 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      getAllMessages();
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [helpAppUserObject]); // Include helpAppUserObject in the dependency array
  /////////////////////////////////////////////////////

  const handleEditClick = (messageId) => {
    const selectedMessage = messages.find((message) => message.id === messageId);

    // Check if the logged-in user is the author of the message
    if (selectedMessage.user.userId === helpAppUserObject.id) {
      setEditedMessage(selectedMessage.msg);
      setEditMessageId(messageId);
    } else {
      // Optionally, you can provide some feedback to the user that they can't edit this message.
      alert("You are not the author of this message and cannot edit it.");
    }
  };

  const handleSaveEdit = (messageId) => {
    // Update the message with the edited text
    const updatedMessages = messages.map((message) =>
      message.id === messageId
        ? {
            ...message,
            msg: editedMessage,
          }
        : message
    );
    setMessages(updatedMessages);
    setEditedMessage(""); // Clear the edited message text
    setEditMessageId(null); // Clear the edit message ID

    const messageToSendToAPI = {
      userId: helpAppUserObject.id,
      userName: helpAppUserObject.userName,
      alertDateTime: new Date().toISOString(), // Use current date and time
      familyId: helpAppUserObject.familyId,
      msg: editedMessage,
    };

    return fetch(`http://localhost:8088/messages/${messageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageToSendToAPI),
    })
      .then((response) => response.json())
      .then(getAllMessages)
      .then(() => {
        // navigate("/")
      });
  };

  const handleDeleteClick = (messageId) => {
    // Check if the logged-in user is the author of the message
    const selectedMessage = messages.find((message) => message.id === messageId);

    if (selectedMessage.user.userId === helpAppUserObject.id) {
      // Delete the message from the API
      fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE",
      })
        .then(getAllMessages)
        .catch((error) => console.error("Error deleting message:", error));
    } else {
      // Optionally, you can provide some feedback to the user that they can't delete this message.
      alert("You are not the author of this message and cannot delete it.");
    }
  };

  return (
    <div className="chat-area">
      {messages.map((message) => (
        <div key={message.id} className="message-container">
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
              <p>
                <strong>{message.user.userName}: </strong>
                {message.msg}
              </p>

              <p>
                <em>{new Date(message.alertDateTime).toLocaleString()}</em>
              </p>

              {message.user.userId === helpAppUserObject.id && (
                <>
                  <button onClick={() => handleEditClick(message.id)}>Edit</button>
                  <button onClick={() => handleDeleteClick(message.id)}>Delete</button>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
