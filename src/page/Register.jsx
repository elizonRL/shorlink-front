import { Link } from "react-router"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useRegister } from "../hooks/useRegister"
import AuthLayout from "../components/AuthLayout"
import Input from "../components/Input"
import ErrorMessage from "../components/ErrorMessage"

const Register = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [registerData, setRegisterData] = useState(null)
    const [validationError, setValidationError] = useState('')

    const { loading, error, data } = useRegister(null, registerData);

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidationError('')
        
        // Client-side validation
        if (!userName.trim()) {
            setValidationError('El nombre de usuario es requerido')
            return
        }
        if (userName.length < 3) {
            setValidationError('El nombre de usuario debe tener al menos 3 caracteres')
            return
        }
        if (!userEmail.trim()) {
            setValidationError('El email es requerido')
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            setValidationError('El email no es válido')
            return
        }
        if (!userPass.trim()) {
            setValidationError('La contraseña es requerida')
            return
        }
        if (userPass.length < 6) {
            setValidationError('La contraseña debe tener al menos 6 caracteres')
            return
        }
        if (userPass !== confirmPass) {
            setValidationError('Las contraseñas no coinciden')
            return
        }
        
        setRegisterData({
            email: userEmail,
            userName: userName,
            password: userPass
        })
    }
    
    useEffect(() => {
        if (data) {
            navigate('/login')
        }
    }, [data, navigate])
    return (
        <AuthLayout 
            title="Crear Cuenta" 
            subtitle="Únete a ShorLink y comienza a acortar enlaces"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <ErrorMessage message={error || validationError} />
                
                <div className="space-y-4">
                    <Input 
                        type="text" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Nombre de usuario" 
                        required
                    />
                    <Input 
                        type="email" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Correo electrónico" 
                        required
                    />
                    <Input 
                        type="password" 
                        value={userPass}
                        onChange={(e) => setUserPass(e.target.value)}
                        placeholder="Contraseña" 
                        required
                    />
                    <Input 
                        type="password" 
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        placeholder="Confirmar contraseña" 
                        required
                    />
                </div>
                
                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
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
                
                <div className="text-center">
                    <p className="text-gray-600">
                        ¿Ya tienes cuenta?{' '}
                        <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Register