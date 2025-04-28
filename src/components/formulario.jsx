import React from 'react';
import './Formulario.css';

function Formulario() {
    return (
      <div className="formulario-container">
        <h2>Formulario</h2>
        <form className="formulario">
          <div className="form-group">
            <label htmlFor="mascota">Nombre Mascota</label>
            <input type="text" id="mascota" placeholder="Nombre Mascota" />
          </div>
          <div className="form-group">
            <label htmlFor="propietario">Nombre Propietario</label>
            <input type="text" id="propietario" placeholder="Nombre Propietario" />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input type="date" id="fecha" />
          </div>
          <div className="form-group">
            <label htmlFor="hora">Hora</label>
            <input type="time" id="hora" />
          </div>
          <div className="form-group">
            <label htmlFor="sintomas">Síntomas</label>
            <textarea id="sintomas" placeholder="Describe los síntomas" />
          </div>
          <button type="submit" className="btn-submit">Agregar Cita</button>
        </form>
      </div>
    );
  }
  
  export default Formulario;