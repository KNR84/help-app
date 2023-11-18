import { Route, Routes } from 'react-router-dom';
import './HelpApp.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { Authorized } from './auth/views/Authorized';

import { ApplicationViews } from './auth/views/ApplicationViews';
import { Logout } from './nav/Logout';
import { NavBar } from './nav/NavBar';






export const HomePage = () => {
    return (
        <form className="messageForm">
            <h2 className="messageForm__title">Messages</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="msg">Enter Message here:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={messageState.msg}
                        onChange={
                            (evt) => {
                                // TODO: Update message property
                                const copy = { ...messageState }
                                copy.msg = evt.target.value
                                updatemessageState(copy)
                                
                            }
                            
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Message
            </button>
        </form>
    )
}

