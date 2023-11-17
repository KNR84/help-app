import { useEffect, useState } from "react"
import "./Message.css"
import { MessageEdit } from "./MessageEdit"


//defines the react functional component MessageList
export const MessageList = () => {

    
    const [messages, setMessages] = useState([])





    const localhelpAppUser = localStorage.getItem("helpApp_user")
    const helpAppUserObject = JSON.parse(localhelpAppUser)




    //useEffect hook used to fetch messages from the URL and stores them in state
    useEffect(
        () => {
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(response => response.json())
                .then((messageArray) => {
          // Filter alerts based on familyId
          const filteredAlerts = messageArray.filter(alert => alert.familyId === helpAppUserObject.familyId);
          setMessages(filteredAlerts);
      });
}, [helpAppUserObject.familyId]);


    //rendering the list of messages. 
    return <>
    
 <fieldset>
        <h2>List of Messages</h2>
        <MessageEdit />
        </fieldset>
    </>
    
}