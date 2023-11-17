//component that renders only NonAdminViews
import { Outlet, Route, Routes } from "react-router-dom"
import { AddNewAlert } from "../../alerts/AddNewAlert"
import { AlertList } from "../../alerts/AlertList"
import { MessageForm } from "../../messages/MessageForm"
import { MessageEdit } from "../../messages/MessageEdit"
import { MessageList } from "../../messages/MessageList"





export const NonAdminView = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>


                    <Outlet />
                </>
            }>

                <Route path="AlertList" element={<AlertList />} />
                <Route path="AddNewAlert" element={<AddNewAlert />} />
                <Route path="MessageForm" element={ <MessageForm/>} />  
                <Route path="MessageEdit" element={ <MessageEdit/>} /> 
                <Route path="MessageList" element={ <MessageList/>} />   
                
              

            </Route>
        </Routes>
    )
}
