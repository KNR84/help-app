import { Route, Routes } from 'react-router-dom';
import './HelpApp.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { AdminView } from './auth/views/AdminView';
import { ParentView } from './auth/views/ParentView';
import { ChildView } from './auth/views/ChildView';
import { Authorized } from './auth/views/Authorized';




export const HelpApp = () => {
  return ( <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      
      <Route path="*" element={
    <Authorized>
      <>
        <AdminView />
        <ParentView />
        <ChildView/>
        
      </>
    </Authorized>
} />
      
      
      
      
      
      
      
      </Routes>
   );
}


