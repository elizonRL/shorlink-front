import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LinksHistory from './components/LinksHistory'
import AuthGuard from './components/AuthGuard'
import { useUserContext, logoutUser } from './Context/userContext'
import { useCreateShortUrl, useGetShortUrls } from './hooks/useShortUrl'



function App() {
  const [url, setUrl] = useState('')
  const [user, setUser] = useState(null)
  const [copied, setCopied] = useState(null)

  const contextUser = useUserContext()
  const { createShortUrl, loading: createLoading } = useCreateShortUrl()
  const { data: shortenedLinks, refetch } = useGetShortUrls()
  
  useEffect(() => {
    setUser(contextUser.user)
  }, [contextUser.user])

  const navigate = useNavigate()

  const handleShortenUrl = async (e) => {
    e.preventDefault()
    if (!url.trim()) return
    
    try {
      console.log('Sending URL:', url)
      const result = await createShortUrl(url)
      console.log('API Response:', result)
      setUrl('')
      refetch() // Refresh the list
    } catch (error) {
      console.error('Error creating short URL:', error)
    }
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
    logoutUser()
    navigate('/login')
  }

  return (
    <AuthGuard>
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
          shortenedLinks={shortenedLinks || []}
          handleCopy={handleCopy}
          copied={copied}
        />
      </div>
    </AuthGuard>
  )
}

export default App
