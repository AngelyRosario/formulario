import './App.css';
import portada from './assets/portadas.png';


function App() {
  return (
    <div className="App">
      {/* Imagen encima del formulario */}
      <img src={portada} alt="Descripción de la imagen" className="form-image" />

      <div className="datos">
        <label><strong>Nombre: </strong><input type="text" /></label><br />
        <label><strong>Apellidos: </strong><input type="text" /></label><br />
        <label><strong>Correo Electrónico: </strong><input type="text" /></label><br />
        
        {/* Opciones con radio buttons */}
        <div>  
          <strong>SEMESTRE ACADÉMICO</strong><br /><br />
          <label>
            <input type="radio" name="opcion" value="primero" />
            I
          </label><br />
          <label>
            <input type="radio" name="opcion" value="segundo" />
            II
          </label><br />
          <label>
            <input type="radio" name="opcion" value="tercero" />
            III
          </label><br />
          <label>
            <input type="radio" name="opcion" value="cuarto" />
            IV
          </label>
        </div>
        
        {/* Botón de Registrar */}
        <button type="button" className="registrar-btn"><strong>Registrar</strong></button>
      </div>
    </div>
  );
}

export default App;
