//higher order component that only returns the webpage meant for administrators
import { Outlet, Route, Routes } from "react-router-dom"




export const AdminView = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                  

                    <Outlet />
                </>
            }>

                <Route path="adminView" element={ <AdminView/>} />
              
                
            </Route>
        </Routes>
    )
}