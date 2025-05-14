// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // IMPORTADO Link
import { AppProvider } from "./Contexto/contexto";

// Importación de Componentes
import Menu from "./Componentes/Menu";
import Listar from "./Componentes/Listar";
import Detalle from "./Componentes/Detalle";
import Aleatorios from "./Componentes/Aleatorio";
import Original from "./Componentes/Original";
import Favoritos from "./Componentes/Favoritos";
import Usuario from "./Componentes/Usuario";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <Menu />
          </header>

          <main className="app-main-content">
            <Routes>
              <Route path="/" element={<Listar />} />
              {/* Revertido a :name para que coincida con Detalle.jsx y tu versión funcional */}
              <Route path="/detalle/:name" element={<Detalle />} />
              <Route path="/original" element={<Original />} />
              <Route path="/aleatorio" element={<Aleatorios />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/usuario" element={<Usuario />} />
              <Route path="*" element={
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <h2>404 - Página No Encontrada</h2>
                  <p>La página que buscas no existe.</p>
                  <Link to="/">Volver al inicio</Link> {/* Ahora Link está importado */}
                </div>
              } />
            </Routes>
          </main>

          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Tu Aplicación Pokémon. Creado con React y la PokeAPI.</p>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;