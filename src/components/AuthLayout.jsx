const AuthLayout = ({ title, subtitle, children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                    <p className="text-gray-600">{subtitle}</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;