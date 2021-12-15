import { Component } from "react";


export class EventosEs7 extends Component{

    state = {
        contador: 0
    }

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar = (e) => {
        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos ES7</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export  class EventosEs6 extends Component{

    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar(e){
        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos ES6</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export class MasSobreEventos extends Component{

    handleClick = (e,message) => {
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(message)
    }

    render(){
        return(
            <div>
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e) => this.handleClick(e, "Hola a todos")}>Saludar</button>
                {/* Evento personalizado */}
                <MiBoton miOnClick={(e) => this.handleClick(e, "Hola desde un componente boton")} />
            </div>
        )
    }
}

function MiBoton(props){
    return(
       <button onClick={props.miOnClick}>Mi Boton</button>
    )
    }    