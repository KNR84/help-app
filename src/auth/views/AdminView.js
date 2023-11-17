//component that renders only AdminViews
import { Outlet, Route, Routes } from "react-router-dom"
import { UserList } from "../../admin/UserList"
import { AddNewUser } from "../../admin/AddNewUser"

import { AddNewAlert } from "../../alerts/AddNewAlert"
import { AlertList } from "../../alerts/AlertList"
import { MessageForm } from "../../messages/MessageForm"
import { MessageEdit } from "../../messages/MessageEdit"
import { MessageList } from "../../messages/MessageList"









export const AdminView = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                   

                    <Outlet />
                </>
            }>

                <Route path="UserList" element={ <UserList/>} /> 
                <Route path="AlertList" element={ <AlertList/>} />   
                <Route path="AddNewUser" element={ <AddNewUser/>} />  
                <Route path="AddNewAlert" element={ <AddNewAlert/>} /> 
                <Route path="MessageForm" element={ <MessageForm/>} /> 
                <Route path="MessageEdit" element={ <MessageEdit/>} /> 
                <Route path="MessageList" element={ <MessageList/>} />         
               
                
                
            </Route>
        </Routes>
    )
}




