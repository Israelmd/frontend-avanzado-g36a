import { createContext } from 'react'

// CONTEXT tiene que ver con el manejo de estados globales en React.
// Es decir, poder compartir LA MISMA información entre DIFERENTES niveles de componentes, de forma directa.

// Para usar CONTEXT requerimos seguir una serie de pasos.

// 1. Crear el contexto
const SongContext = createContext()

// 2. Crear el Proveedor (provider) del contexto. Este maneja de donde se obtiene la información y como se comparte.
// En este caso, el proveedor es un COMPONENTE que envuelve a los componentes que necesitan acceder a la información (el contexto). La información se comparte a través de un prop especial llamado "value".

function SongProvider ({children}) {

    const data = {

    }

    return (
        <SongContext.Provider value={data}>
            {children}
        </SongContext.Provider>
    )
}

export { SongProvider, SongContext }