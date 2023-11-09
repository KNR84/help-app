import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';




export const App = () => {
  return ( <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      </Routes>
   );
}

// export default App;
