import React from 'react';
import Cita from './Cita';
import './Listado.css';

function Listado() {
  return (
    <div className="listado-container">
      <h2>Listado</h2>
      <Cita />
      <Cita />
      <Cita />
    </div>
  );
}

export default Listado;
