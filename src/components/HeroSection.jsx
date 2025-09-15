const HeroSection = ({url, setUrl, handleShortenUrl}) => {
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
                <div className="relative max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
                        Acorta. Comparte. Rastrea.
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-2">
                        Transforma URLs largas en enlaces elegantes y obtén estadísticas detalladas de cada clic
                    </p>

                    {/* Formulario Mejorado */}
                    <div className="backdrop-blur-md bg-white/90 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/20 mx-2 sm:mx-0">
                        <form onSubmit={handleShortenUrl} className="flex flex-col gap-3 sm:gap-4">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                                    <span className="text-gray-400 text-base sm:text-lg">🔗</span>
                                </div>
                                <input
                                    type="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://ejemplo.com/mi-enlace-muy-largo"
                                    className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm sm:text-base lg:text-lg bg-white/80 backdrop-blur-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span className="hidden sm:inline">✨ Acortar Enlace</span>
                                <span className="sm:hidden">✨ Acortar</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
