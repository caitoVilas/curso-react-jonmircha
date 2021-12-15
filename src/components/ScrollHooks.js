
import React, {useEffect, useState} from 'react'

const ScrollHooks = () => {

    const [scrollY, setscrollY] = useState(0)

    useEffect(() => {
       //console.log("moviendo el scroll")
       const detectarScroll = (e) => {
           setscrollY(window.pageYOffset)
       }
       window.addEventListener('scroll', detectarScroll)
    },[scrollY])

    useEffect(() => {
        //console.log("fase de montaje")
    },[])

    useEffect(()=>{
        return ()=>{
            //console.log("fase de desmontaje")
        }
    })


    return (
        <div>
            <h2>Hooks useEfect ciclo de vida</h2>
            <p>Scrool Y del navegador {scrollY}</p>
        </div>
    )
}

export default ScrollHooks
