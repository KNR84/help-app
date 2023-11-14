//higher order component that returns the webpage meant for administrators
import { Outlet, Route, Routes } from "react-router-dom"
import { AdminView } from "../auth/views/AdminView"
// import { useEffect } from "react"

// TO DO change age input field to not have negative numbers


export const AdminSetupForm = () => {

   



    return (
        <Routes>
            <Route path="/" element={
                <>
                    <div className="adminForm">
                       <label className="Child Name">Child Name</label>
                        <div className="adminForm">
                            <input className="input" type="text" placeholder="e.g Alex Smith">
                            </input>
                        </div>
                    </div>

                    <div className="adminForm">
                       <label className="Child Name">Child Email</label>
                        <div className="adminForm">
                            <input className="input" type="email" placeholder="e.g me@me.com">
                            </input>
                        </div>
                    </div>

                    <br></br>
                    <div className="adminForm">
                        <label className="radio-selectFeature">
                            <input type="radio" name="answer">
                            </input>
                            Chat Feature
                            <br></br>
                        </label>
                        <label className="radio-selectFeature">
                            <input type="radio" name="answer">
                            </input>
                            Drop down Feature
                        </label>
                    </div>

                    <br></br>
                    <div className="adminForm">
                        <label className="CustomDropDown">Customize your drop down menu</label>
                        <div className="adminForm">
                            <input className="input" type="text" placeholder="Medical Emergency">
                            </input>
                        </div>
                    </div>

                    <br></br>
                    <div className="adminForm">
                        <label className="radio-selectPriority">
                            Set priority level
                            <br></br>
                            <input type="radio" name="answer">
                            </input>
                            High!
                        </label>
                        <label className="radio-selectPriority">
                            <input type="radio" name="answer">
                            </input>
                            Low
                        </label>
                    </div>

                    <br></br>
                    <div className="adminForm">
                        <label className="EmergencyContact">Emergency Contacts: Choose up to three</label>
                        <div className="adminForm">
                            <input className="input" type="text" placeholder="Emergency Contact Name">
                            </input>
                        </div>
                    </div>

                    <div className="adminForm">
                        <label className="EmergencyContact">Emergency Contact Phone </label>
                        <div className="adminForm">
                            <input className="input" type="text" placeholder="Emergency Contact Phone">
                            </input>
                        </div>
                    </div>
                    
                    <Outlet />
                </>
            }>

                <Route path="adminView" element={<AdminView />} />


            </Route>
        </Routes>
    )
}