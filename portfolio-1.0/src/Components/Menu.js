// Importando configurações
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { BiSolidBot } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// Importando estilos
import '../styles/Menu.scss';

const Menu = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuBar(!menuBar);
  };

  return (
    <section className='box-menu' id={`${menuBar ? 'bar' : ''}`}>
      <article className="logo">
        <BiSolidBot className="bot-img" size={75} color="#5EC57E" />
        <p>GABRIEL ROCHA<br />PIMENTEL</p>
      </article>

      <nav className="menu" id={`${menuOpen ? 'open' : ''}`}>
        <ul>
          <li className="box-linkMenu">
            <Link to="/" className="link-menu">Home</Link>
          </li>

          <li className="box-linkMenu">
            <Link to="/portfolio" className="link-menu">Portfólio</Link>
          </li>

          <li className="box-linkMenu">
            <Link to="/contatos" className="link-menu">Contatos</Link>
          </li>
        </ul>
      </nav>

      <IoMenu onClick={toggleMenu} className="btnMenu" size={50} color="#347571" />
    </section>
  );
};

export default Menu;
