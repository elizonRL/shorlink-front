
const LinksHistory = ({ shortenedLinks, handleCopy, handleDelete, copied, deletingId, newLinkId }) => {
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
                        {shortenedLinks.map((link) => {
                            const linkId = link.id || link._id
                            const isDeleting = deletingId === linkId
                            const isNew = newLinkId === linkId
                            
                            // Debug: Show complete link object first
                            console.log('=== LINK DEBUG ===');
                            console.log('Complete link object:', link);
                            console.log('Available fields:', Object.keys(link));
                            
                            // Try different possible field names for short code
                            const possibleCodes = {
                                shortUrlCode: link.shortUrlCode,
                                code: link.code,
                                shortCode: link.shortCode,
                                _id: link._id,
                                id: link.id,
                                fromUrl: link.shortUrl ? link.shortUrl.split('/').pop() : null
                            };
                            
                            console.log('Possible codes:', possibleCodes);
                            
                            // Extract code from shortUrl (the part after the last slash)
                            const shortCode = link.shortUrl ? link.shortUrl.split('/').pop() : 'unknown';
                            const frontendUrl = `${window.location.origin}/r/${shortCode}`;
                            
                            console.log('Final shortCode used:', shortCode);
                            console.log('Generated frontendUrl:', frontendUrl);
                            console.log('==================');
                            
                            return (
                            <div 
                                key={linkId} 
                                className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:bg-white/90 ${
                                    isDeleting ? 'animate-pulse opacity-50 scale-95 bg-red-50 border-red-200' : ''
                                } ${
                                    isNew ? 'animate-bounce bg-green-50 border-green-200 shadow-lg scale-105' : ''
                                }`}
                            >
                                <div className="space-y-3">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                                        <a
                                            href={frontendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-200 flex items-center space-x-2 break-all sm:break-normal"
                                        >
                                            <span>🔗</span>
                                            <span className="truncate">{frontendUrl}</span>
                                        </a>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleCopy(frontendUrl, linkId)}
                                                className={`px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 w-fit ${copied === linkId
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {copied === linkId ? '✅ Copiado' : '📋 Copiar'}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(link.shortUrl)}
                                                className="px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 w-fit bg-red-100 text-red-600 hover:bg-red-200"
                                            >
                                                🗑️ Eliminar
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 px-3 py-2 rounded-lg">
                                        <p className="text-gray-600 text-xs sm:text-sm break-all">
                                            {link.originalUrl}
                                        </p>
                                    </div>


                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    )
}

export default LinksHistory;