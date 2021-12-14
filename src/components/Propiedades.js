
export default function Propiedades(props){

    return(
        <>
        <h2>Propiedades {props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano? "true": "false"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + ' - ' + props.objeto.email}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul>
        </>
    )
}

Propiedades.defaultProps = {
    porDefecto: "las props"
}