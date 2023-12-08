import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importações de estilos
import './styles/index.scss';

// Importações de componentes
import Home from './Components/Pages/Home.js';
import About from './Components/Pages/About.js';
import Values from './Components/Pages/Values.js';
import Services from './Components/Pages/Services.js';
import Main from './Components/Pages/Main.js';
import End from './Components/Pages/End.js';
import Portfolio from './Components/Pages/Portfolio.js';
import Contacts from './Components/Pages/Contacts.js';

// Criação do Root e Renderização
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Home to="/" />
              <About to="/" />
              <Values to="/" />
              <Services to="/" />
              <Main to="/" />
              <End to="/" />
            </>
          }
        />
        <Route path="*" element={<Portfolio to="/portfolio" />} />
        <Route path="*" element={<Contacts to="/contatos" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
