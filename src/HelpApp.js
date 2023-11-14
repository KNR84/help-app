import { Route, Routes } from 'react-router-dom';
import './HelpApp.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { AdminView } from './auth/views/AdminView';


import { Authorized } from './auth/views/Authorized';
import { AdminSetupForm } from './profile/AdminSetupForm';




export const HelpApp = () => {
  return (<Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="*" element={
      <Authorized>
        <>
          <AdminView />
          <AdminSetupForm />
        </>
      </Authorized>
    } />







  </Routes>
  );
}


