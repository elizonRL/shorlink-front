import Button from "./Button";

const LinksHistory = ({ shortenedLinks, handleCopy, copied }) => {
    return (
        shortenedLinks.length > 0 && (
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
                                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${copied === link.id
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {copied === link.id ? '✅ Copiado' : '📋 Copiar'}
                                            </button>
                                            {/* <Button handelClik={handleCopy}
                                                classButon={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${copied === link.id
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {copied === link.id ? '✅ Copiado' : '📋 Copiar'}
                                            </Button> */}
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
        )
    )
}

export default LinksHistory;