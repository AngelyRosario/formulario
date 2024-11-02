import './App.css';
import portada from './assets/portadas.png';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [semestre, setSemestre] = useState(""); // Estado para el semestre

  // Función para mostrar los datos ingresados
  const mostrarDatos = () => {
    alert(`Nombre: ${nombre}\nApellidos: ${apellido}\nCorreo Electrónico: ${correo}\nSemestre: ${semestre}`);
  }

  return (
    <div className="App">
      {/* Contenedor para imagen y formulario */}
      <div className="container">
        {/* Imagen encima del formulario */}
        <img src={portada} alt="Descripción de la imagen" className="form-image" />

        <div className="datos">
          <label>
            <strong>Nombre: </strong>
            <input 
              onChange={(event) => { setNombre(event.target.value); }} 
              type="text" 
              placeholder="Ingrese su nombre"
            />
          </label><br />
          <label>
            <strong>Apellidos: </strong>
            <input 
              onChange={(event) => { setApellido(event.target.value); }} 
              type="text" 
              placeholder="Ingrese sus apellidos"
            />
          </label><br />
          <label>
            <strong>Correo Electrónico: </strong>
            <input 
              onChange={(event) => { setCorreo(event.target.value); }} 
              type="text" 
              placeholder="Ingrese su correo electrónico"
            />
          </label><br />
          
          {/* Opciones con radio buttons */}
          <div className="semestre-options">  
            <strong>SEMESTRE ACADÉMICO</strong><br /><br />
            <label>
              <input 
                type="radio" 
                name="opcion" 
                value="primero" 
                onChange={(event) => setSemestre(event.target.value)} 
              />
              I
            </label><br />
            <label>
              <input 
                type="radio" 
                name="opcion" 
                value="segundo" 
                onChange={(event) => setSemestre(event.target.value)} 
              />
              II
            </label><br />
            <label>
              <input 
                type="radio" 
                name="opcion" 
                value="tercero" 
                onChange={(event) => setSemestre(event.target.value)} 
              />
              III
            </label><br />
            <label>
              <input 
                type="radio" 
                name="opcion" 
                value="cuarto" 
                onChange={(event) => setSemestre(event.target.value)} 
              />
              IV
            </label>
          </div>
          
          {/* Botón de Registrar */}
          <button onClick={mostrarDatos} type="button" className="registrar-btn">
            <strong>Registrar</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
