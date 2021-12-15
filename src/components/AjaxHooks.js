import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

const AjaxHooks = () => {

    const [pokemons, setpokemons] = useState([])

    // useEffect(()=>{
    //     let url = "https://pokeapi.co/api/v2/pokemon/"
    //     fetch(url)
    //     .then(res => res.json())
    //     .then((json)=> {
    //         //console.log(json)
    //         json.results.forEach((el) => {
    //             fetch(el.url)
    //             .then((res) => res.json())
    //             .then((json) => {
    //                // console.log(json)
    //                 let pokemon = {
    //                     id: json.id,
    //                     name: json.name,
    //                     avatar: json.sprites.front_default
    //                 }
    //                 setpokemons((pokemons)=>[...pokemons, pokemon])
    //             })
    //         })
    //     })
    // },[])

    useEffect(()=>{
        const getPokemons = async (url)=>{
            let res = await fetch(url)
            let json = await res.json()
            json.results.forEach(async(el)=>{
                let res = await fetch(el.url)
                let json = await res.json()
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                setpokemons((pokemons)=>[...pokemons, pokemon])
            })
        }    
        getPokemons("https://pokeapi.co/api/v2/pokemon/")
    },[])

    return (
        <div>
            <h2>Ajax Hooks</h2>
            {pokemons.length === 0 ?(<h3>Cargando...</h3>):
            (pokemons.map((el)=>(<Pokemon key={el.id} name={el.name} avatar={el.avatar} />)))}
        </div>
    )
}

export default AjaxHooks

function Pokemon({avatar, name}){
    return(
        <figure>
            <img src={avatar} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}
