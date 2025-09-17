
const LinksHistory = ({ shortenedLinks, handleCopy, copied }) => {
    return (
        shortenedLinks.length > 0 && (
            <div className="max-w-4xl mx-auto px-3 sm:px-4 pb-8 sm:pb-16">
                <div className="backdrop-blur-md bg-white/90 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/20 mx-2 sm:mx-0">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-6 sm:mb-8">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <span className="text-xl sm:text-2xl">📊</span>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Tus enlaces acortados</h3>
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold w-fit">
                            {shortenedLinks.length}
                        </span>
                    </div>

                    <div className="grid gap-3 sm:gap-4">
                        {shortenedLinks.map((link) => (
                            <div key={link.id} className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:bg-white/90">
                                <div className="space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                                        <a
                                            href={link.shortUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-200 flex items-center space-x-2 break-all sm:break-normal"
                                        >
                                            <span>🔗</span>
                                            <span className="truncate">{link.shortUrl}</span>
                                        </a>
                                        <button
                                            onClick={() => handleCopy(link.shortUrl, link.id)}
                                            className={`px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 w-fit ${copied === link.id
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {copied === link.id ? '✅ Copiado' : '📋 Copiar'}
                                        </button>
                                    </div>

                                    <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                        <p className="text-gray-600 text-xs sm:text-sm break-all">
                                            {link.originalUrl}
                                        </p>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}

export default LinksHistory;