import React, {useState} from 'react'

export  const ContadorHooks = () => {
    
    const [contador, setcontador] = useState(0)

    const sumar = (e) => {
        setcontador(contador +1)
    }

    const restar = (e) => {
        setcontador(contador -1)
    }

    return (
        <div>
            <h2>Hooks useState</h2>
            <p>{contador}</p>
            <nav>
                <button onClick={sumar}> + </button>
                <button onClick={restar}> - </button>
            </nav>
        </div>
    )
}
