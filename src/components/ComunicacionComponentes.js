import { Component } from "react";

export default class Padre extends Component{

    state = {
        contador: 0
    }

    incrementarContador = () => {
        this.setState({
            contador: this.state.contador +1
        })
    }

    render(){
        return(
            <div>
                <h2>Comunicacion Componentes</h2>
                <p><b>{this.state.contador}</b></p>
                <Hijo msg="Mensaje para el hijo 1"
                      incrementarContador={this.incrementarContador} />
                <Hijo msg="Mensaje para el hijo 2"
                      incrementarContador={this.incrementarContador} />
            </div>
        )
    }
}

function Hijo(props){
    return(
        <div>
            <h3>{props.msg}</h3>
            <button onClick={props.incrementarContador}> Aumentar </button>
        </div>
    )
}