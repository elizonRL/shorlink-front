import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { setUserToContext } from "../Context/userContext";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import ErrorMessage from "../components/ErrorMessage";


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
    const { loading, error, data } = useLogin(null, loginData);
    
    useEffect(() => {
        if(data){
            setUserToContext(data)
            navigate('/')
        }
    }, [data, navigate])

    return (
        <AuthLayout 
            title="Iniciar Sesión" 
            subtitle="Accede a tu cuenta de ShorLink"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <ErrorMessage message={error} />
                
                <div className="space-y-4">
                    <Input
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        placeholder="Nombre de usuario"
                        required
                    />
                    <Input
                        onChange={(e) => setUserPass(e.target.value)}
                        value={userPass}
                        type="password"
                        placeholder="Contraseña"
                        required
                    />
                </div>

                <button
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
                
                <div className="text-center">
                    <p className="text-gray-600">
                        ¿No tienes cuenta?{' '}
                        <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Login;