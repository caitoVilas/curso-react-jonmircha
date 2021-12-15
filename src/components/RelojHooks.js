import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

const RelojHooks = () => {

    const [hora, sethora] = useState(new Date().toLocaleTimeString())
    const [visible, setvisible] = useState(false)

    useEffect(()=>{
        let temporizador
        if (visible) {
            temporizador = setInterval(()=>{
                sethora(new Date().toLocaleTimeString())
            },1000)
        }else{
            clearInterval(temporizador)
        }
        return ()=>{
            console.log("fase de desmontaje")
        }
    },[visible])
   

    return (
        <div>
            <h2>Reloj Hooks</h2>
            {visible && <Reloj hora={hora} />}
            <button onClick={()=> setvisible(true)}>Iniciar</button>
            <button onClick={()=> setvisible(false)}>Detener</button>
        </div>
    )
}


export default RelojHooks

function Reloj({hora}) {
    return <h3>{hora}</h3>
}