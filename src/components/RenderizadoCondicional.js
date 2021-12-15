import { Component } from "react";

function Login() {
    
   return(
       <div>
           <h3>login</h3>
       </div>
   )
}
function Logout() {
    
    return(
        <div>
            <h3>logout</h3>
        </div>
    )
 }

export default class RenderizadoCondicional extends Component{

    constructor(props){
        super(props)
        this.state = {
            session: true
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado condicional</h2>
                {this.state.session? <Login />: <Logout />}
            </div>
        )
    }
}