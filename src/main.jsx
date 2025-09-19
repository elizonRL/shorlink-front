import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"


import App from './App.jsx'
import Login from './page/Login.jsx'
import Register from './page/Register.jsx'
import Redirect from './components/Redirect.jsx'
import { UserProvider } from './Context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/r/:shortCode" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
)
