import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"

import App from './App.jsx'
//import { UserProvider } from './Context/userContext.jsx'
import Login from './page/Login.jsx'
import Register from './page/Register.jsx' 

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  
)
