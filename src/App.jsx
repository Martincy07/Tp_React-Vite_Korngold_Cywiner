import Formulario from './components/Cita';
import Listado from './components/Listado';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <div className="one-half column">
          <h2>CREAR MI CITA</h2>
          <Formulario/>
        </div>
        <div className="one-half column">
          <h2>ADMINISTRA TUS CITAS</h2>
          <Listado/>
          <Listado/>
          <Listado/>


        </div>
      </div>
    </div>
  );
}

export default App;
