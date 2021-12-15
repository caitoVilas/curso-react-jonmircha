import { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props){
    return(
        <li><a href={props.el.web} target="_blank" rel="noopener noreferrer">{props.el.name}</a></li>
    )
}

export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props)
        console.log(data)
        this.state = {
            estaciones: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.estaciones.map((e, index) =>(<li key={index}>{e}</li>))}
                </ol>
                <h3>Frameworks Javascript</h3>
                <ul>
                    {data.frameworks.map((el) => <ElementoLista key={el.id} el={el} />)}
                </ul>
            </div>
        )
    }
}