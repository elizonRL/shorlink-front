import { Link } from "react-router"

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Crear Cuenta</h1>
                    <p className="text-gray-600">Únete a ShorLink y comienza a acortar enlaces</p>
                </div>
                
                <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                    <div className="space-y-4">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Nombre de usuario" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Correo electrónico" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                placeholder="Contraseña" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Crear Cuenta
                    </button>
                    
                    <div className="text-center text-sm text-gray-500">
                        Al registrarte, aceptas nuestros{' '}
                        <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                            Términos de Servicio
                        </Link>
                        {' '}y{' '}
                        <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                            Política de Privacidad
                        </Link>
                    </div>
                </form>
                
                <div className="text-center">
                    <p className="text-gray-600">
                        ¿Ya tienes cuenta?{' '}
                        <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register