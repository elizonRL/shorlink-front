const HeroSection = ({url, setUrl, handleShortenUrl}) => {
    return (
        <>
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
        </>
    )
}

export default HeroSection
