import { useState } from 'react'
import './App.css'

import Header from './components/Header'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedLinks, setShortenedLinks] = useState([])
  const [user, setUser] = useState(null)
  const [copied, setCopied] = useState(null)

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
    setUser({ username: 'Usuario Demo', email: 'demo@shorlink.app' })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      user={user}
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Acorta. Comparte. Rastrea.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Transforma URLs largas en enlaces elegantes y obtén estadísticas detalladas de cada clic
          </p>
          
          {/* Formulario Mejorado */}
          <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-2xl p-8 border border-white/20">
            <form onSubmit={handleShortenUrl} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-lg">🔗</span>
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://ejemplo.com/mi-enlace-muy-largo"
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-lg bg-white/80 backdrop-blur-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ✨ Acortar Enlace
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lista de Enlaces Mejorada */}
      {shortenedLinks.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-2xl">📊</span>
              <h3 className="text-2xl font-bold text-gray-900">Tus enlaces acortados</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {shortenedLinks.length}
              </span>
            </div>
            
            <div className="grid gap-4">
              {shortenedLinks.map((link) => (
                <div key={link.id} className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:bg-white/90">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <a 
                          href={link.shortUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>🔗</span>
                          <span>{link.shortUrl}</span>
                        </a>
                        <button 
                          onClick={() => handleCopy(link.shortUrl, link.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                            copied === link.id 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {copied === link.id ? '✅ Copiado' : '📋 Copiar'}
                        </button>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 truncate bg-gray-50 px-3 py-2 rounded-lg">
                        {link.originalUrl}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <span>👆</span>
                          <span className="font-medium">{link.clicks} clics</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>📅</span>
                          <span>Creado: {link.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
