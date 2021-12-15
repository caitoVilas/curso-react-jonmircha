import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosEs6, EventosEs7, MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import { ContadorHooks } from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';

function App() {
  let nombre = "Caito"
  let logueado = true
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{nombre}</h1>
        <p>{logueado? "El usuario esta logueado": "no esta logueado"}</p>
        <ul>
          {estaciones.map((e, index) => (<li key={index}>{e}</li>))}
        </ul>
        <section>
          <Componente msg="Hola soy un componente"></Componente>
          <hr />
          <Propiedades 
                cadena="esto es una cadena" 
                numero={19} 
                booleano={true}
                arreglo={[1,2,3]}
                objeto={{nombre: "Caito", email: "caitocd@gmail.com"}}
                funcion={(num) => num * num}
                elementoReact= {<i>elemento react</i>} 
                componenteReact= {<Componente msg="componente pasado como prop" />} />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosEs6 />
          <hr />
          <EventosEs7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
        </section>
      </header>
    </div>
  );
}

export default App;
