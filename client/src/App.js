
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Signup, Login } from './components/auth';
import { NotFound, Home } from './components/landing';
import { useState } from 'react';
import { Root } from "./components/landing";
import { AuthRoute } from './tools/hooks';


function App() {
  const [user, setUser] = useState({})

  return (
    <Routes>
      <Route index element={<Root />} />

      <Route path="/home" element={  
        <AuthRoute setUser={setUser}>
          <Home />  
        </AuthRoute>
        } />
      <Route path="/signup" element={  <Signup />} />
      <Route path="/login" element={  <Login />} />

        
    
      <Route path="*" element={ <NotFound />} />
    </Routes>
  );
}

export default App;
