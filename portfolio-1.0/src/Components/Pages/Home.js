import React from 'react';
import { SlArrowDownCircle } from 'react-icons/sl';
import '../../styles/Home.scss';
import Menu from '../Menu';
import documentImage from '../../imagens/webPage01.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <header className="container-home">
        <Menu />

        <section className="box-title">
          <article className="title-description">
            <h1>
              <span>Bem Vindo Sou</span> Desenvolvedor Web
              <span> Full-Stack</span> Freelancer
            </h1>
            
            <Link to="/contatos">
              <button className="btn">Vamos Negociar</button>
            </Link>
          </article>

          <article className="img-title">
            <img
              className="img-document"
              src={documentImage}
              alt="Imagem de Documentos"
            />
          </article>
        </section>

        <SlArrowDownCircle className="icon-seta" size={50} color="#5EC57E" />
      </header>
    </div>
  );
};

export default Home;
