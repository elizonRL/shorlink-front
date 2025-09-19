import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LinksHistory from './components/LinksHistory'
import AuthGuard from './components/AuthGuard'
import { useUserContext, logoutUser } from './Context/userContext'
import { useCreateShortUrl, useGetShortUrls, useDeleteShortUrl } from './hooks/useShortUrl'



function App() {
  const [url, setUrl] = useState('')
  const [user, setUser] = useState(null)
  const [copied, setCopied] = useState(null)
  const [localLinks, setLocalLinks] = useState([])
  const [deletingId, setDeletingId] = useState(null)
  const [newLinkId, setNewLinkId] = useState(null)

  const contextUser = useUserContext()
  const { createShortUrl, loading: createLoading } = useCreateShortUrl()
  const { data: shortenedLinks, refetch } = useGetShortUrls()
  const { deleteShortUrl } = useDeleteShortUrl()

  // Update local links when API data changes
  useEffect(() => {
    if (shortenedLinks) {
      setLocalLinks(shortenedLinks)
    }
  }, [shortenedLinks])
  
  useEffect(() => {
    setUser(contextUser.user)
  }, [contextUser.user])

  const navigate = useNavigate()

  const handleShortenUrl = async (e) => {
    e.preventDefault()
    if (!url.trim()) return
    
    try {
      const result = await createShortUrl(url)
      setUrl('')
      
      // Add new link with animation
      if (result) {
        setNewLinkId(result.id || result._id)
        setTimeout(() => setNewLinkId(null), 1000)
      }
      
      refetch() // Refresh the list
    } catch (error) {
      // Error is handled by the hook
    }
  }

  const handleCopy = async (text, id) => {
    await navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleDelete = async (shortUrl) => {
    const shortCode = shortUrl.split('/').pop()
    const linkToDelete = localLinks.find(link => link.shortUrl.endsWith(shortCode))
    
    if (!linkToDelete) return
    
    // Start delete animation
    setDeletingId(linkToDelete.id || linkToDelete._id)
    
    // Wait for animation then remove
    setTimeout(() => {
      const originalLinks = [...localLinks]
      setLocalLinks(prev => prev.filter(link => !link.shortUrl.endsWith(shortCode)))
      setDeletingId(null)
      
      // Actually delete from server
      deleteShortUrl(shortCode).catch(() => {
        // Revert on error
        setLocalLinks(originalLinks)
      })
    }, 300)
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
          loading={createLoading}
        />

        {/* Lista de Enlaces Mejorada */}
        <LinksHistory
          shortenedLinks={localLinks}
          handleCopy={handleCopy}
          handleDelete={handleDelete}
          copied={copied}
          deletingId={deletingId}
          newLinkId={newLinkId}
        />
      </div>
    </AuthGuard>
  )
}

export default App
