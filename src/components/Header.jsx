

const Header = ({user, handleLogout, handleLogin})=>{
    return(
        <>
      {/* Navbar con Glassmorphism */}
      <nav className="backdrop-blur-md bg-white/80 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">S</span>
              </div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ShorLink
              </h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {user ? (
                <>
                  <div className="hidden sm:flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">{user.userName[0]}</span>
                    </div>
                    <span className="text-gray-700 font-medium">Hola, {user.userName}</span>
                  </div>
                  <div className="sm:hidden w-7 h-7 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{user.userName[0]}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Cerrar Sesión</span>
                    <span className="sm:hidden">Salir</span>
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Iniciar Sesión</span>
                  <span className="sm:hidden">Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header