//component that renders only NonAdminViews
import { Outlet, Route, Routes } from "react-router-dom"
import { AddNewAlert } from "../../alerts/AddNewAlert"
import { AlertList } from "../../alerts/AlertList"




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
              

            </Route>
        </Routes>
    )
}
