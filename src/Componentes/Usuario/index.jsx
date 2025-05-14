// src/Componentes/Usuario/index.jsx
import "./style.css"; // Asegúrate que este archivo exista en src/Componentes/Usuario/style.css si necesitas estilos específicos.

function Usuario() {
  // Este es un componente placeholder por ahora.
  // Aquí podrías desarrollar funcionalidades como:
  // - Mostrar información del perfil del usuario (si tuvieras un sistema de login).
  // - Preferencias de la aplicación (ej. tema claro/oscuro).
  // - Estadísticas de uso personalizadas.

  return (
    <section className="c-usuario-container">
      <header className="c-usuario-header">
        <h1>Perfil de Usuario</h1>
      </header>
      <div className="c-usuario-contenido">
        <p>Esta sección está en desarrollo.</p>
        <p>Próximamente podrás encontrar aquí opciones y configuraciones relacionadas con tu cuenta.</p>
        {/* Ejemplo de contenido futuro:
        <div className="c-usuario-preferencias">
          <h3>Preferencias</h3>
          <label>
            <input type="checkbox" name="notificaciones" />
            Recibir notificaciones
          </label>
        </div>
        */}
      </div>
    </section>
  );
}

export default Usuario;