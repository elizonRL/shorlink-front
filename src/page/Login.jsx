import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { useLogin } from "../hooks/useLogin";
import { setUserToContext } from "../Context/userContext";


const Login = () => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [loginData, setLoginData] = useState(null)
    const handleSubmit =(e) => {
        e.preventDefault();
        setLoginData({
            userName: userName,
            password: userPass
        })
    }
    const { loading, error, data } = useLogin("http://localhost:3000/api/users/login", loginData);
    
    useEffect(() => {
        if(data){
            setUserToContext(data)
            navigate('/')
        }
    }, [data, navigate])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</h1>
                    <p className="text-gray-600">Accede a tu cuenta de ShorLink</p>
                </div>

                <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <div>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                type="text"
                                name="login"
                                placeholder="Nombre de usuario"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <input
                                onChange={(e) => setUserPass(e.target.value)}
                                value={userPass}
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {loading ? 'Iniciando...' : 'Iniciar Sesión'}
                    </button>

                    <div className="text-center">
                        <Link to='' className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                </form>

                <div className="text-center">
                    <p className="text-gray-600">
                        ¿No tienes cuenta?{' '}
                        <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;