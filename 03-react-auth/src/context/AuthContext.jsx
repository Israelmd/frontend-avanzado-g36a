import { createContext } from 'react'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Proveedor (provider) del contexto.
function AuthProvider ({children}) {
// Aquí va mi lógica de autenticación

    const data = {
        // Aquí van los datos que quiero compartir de forma global
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }