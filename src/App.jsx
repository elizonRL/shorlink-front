import { useEffect } from 'react'
import { use, useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LinksHistory from './components/LinksHistory'
import { useUserContext } from './Context/userContext'



function App() {
  const [url, setUrl] = useState('')
  const [shortenedLinks, setShortenedLinks] = useState([])
  const [user, setUser] = useState(null)
  const [copied, setCopied] = useState(null)

  const contextUser = useUserContext()
  
  useEffect(() => {
    setUser(contextUser.user)
  }, [contextUser.user])

  //hook de react-router para navegar hacia una ruta 
  const navigate = useNavigate()

  const handleShortenUrl = (e) => {
    e.preventDefault()
    if (!url.trim()) return
    const newLink = {

      id: Date.now(),
      originalUrl: url,
      shortUrl: `https://shorlink.app/${Math.random().toString(36).substr(2, 8)}`,
      clicks: Math.floor(Math.random() * 100),
      createdAt: new Date().toLocaleDateString()
    }
    
    setShortenedLinks([newLink, ...shortenedLinks])
    setUrl('')
  }

  const handleCopy = async (text, id) => {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      <Header
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      user={user}
      />
      {/* Hero Section */}
      <HeroSection
        handleShortenUrl={handleShortenUrl}
        url={url}
        setUrl={setUrl}
      />

      {/* Lista de Enlaces Mejorada */}
      <LinksHistory
        shortenedLinks={shortenedLinks}
        handleCopy={handleCopy}
        copied={copied}
      />
    </div>
  )
}

export default App
