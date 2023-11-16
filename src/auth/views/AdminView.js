//component that renders only AdminViews
import { Outlet, Route, Routes } from "react-router-dom"
import { UserList } from "../../admin/UserList"
import { AddNewUser } from "../../admin/AddNewUser"

import { AddNewAlert } from "../../alerts/AddNewAlert"
import { AlertList } from "../../alerts/AlertList"
import { AddNewMessage } from "../../messages/AddNewMessage"







//renders the ticket list to the webpage using the Route function. 
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
                <Route path="AddNewMessage" element={ <AddNewMessage/>} />  
                
                
            </Route>
        </Routes>
    )
}




