//higher order component that returns the webpage meant for administrators
import { Outlet, Route, Routes } from "react-router-dom"




export const AdminView = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Admin View</h1>
                    <div>If you see me, you da boss</div>

                    <Outlet />
                </>
            }>

                <Route path="adminView" element={ <AdminView/>} />
              
                
            </Route>
        </Routes>
    )
}