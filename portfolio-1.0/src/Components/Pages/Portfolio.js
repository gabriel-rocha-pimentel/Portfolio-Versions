import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

import '../../styles/Portfolio.scss';

// Importando imagens
import productLandingPage from '../../imagens/img-card-projects/onePage-img.png';
import shortLinkPage from '../../imagens/img-card-projects/linkPage-img.png';
import oldCalculatorPage from '../../imagens/img-card-projects/oldCalculator-img.png';
import cardSummaryPage from '../../imagens/img-card-projects/summary-img.png';
import companyLandingPage from '../../imagens/img-card-projects/huddlePage-img.png';
import productCardPage from '../../imagens/img-card-projects/cardProduct-img.png';
import nftCardPage from '../../imagens/img-card-projects/nftCard-img.png';
import questionsCardPage from '../../imagens/img-card-projects/acordion-img.png';

const cardsData = [
  {
    link: 'https://simplifica-digital.netlify.app/',
    imgSrc: productLandingPage,
    alt: 'Imagem demonstrativa do projeto. Landing Page',
  },
  {
    link: 'https://link-shortner-q9fc.onrender.com/',
    imgSrc: shortLinkPage,
    alt: 'Imagem demonstrativa do projeto. Página encurtadora de link',
  },
  {
    link: 'https://age-calculator-273t.onrender.com/',
    imgSrc: oldCalculatorPage,
    alt: 'Imagem demonstrativa do projeto. Calculadora de idade.',
  },
  {
    link: 'https://result-saummary.netlify.app/',
    imgSrc: cardSummaryPage,
    alt: 'Imagem demonstrativa do projeto. Card organizador de tarefas.',
  },
  {
    link: 'https://my-landing-page-huddle.netlify.app/',
    imgSrc: companyLandingPage,
    alt: 'Imagem demonstrativa do projeto. Landing Page.',
  },
  {
    link: 'https://my-card-of-product.netlify.app/',
    imgSrc: productCardPage,
    alt: 'Imagem demonstrativa do projeto. Card de produto.',
  },
  {
    link: 'https://card-product-nft.netlify.app/',
    imgSrc: nftCardPage,
    alt: 'Imagem demonstrativa do projeto. Card NFT.',
  },
  {
    link: 'https://accordio-card.netlify.app/',
    imgSrc: questionsCardPage,
    alt: 'Imagem demonstrativa do projeto. Card de tirar dúvidas.',
  },
];

function Portfolio () {
    return(
        <header className='container-portfolio'>
            <Menu />
            <section className="container-cards">
                {cardsData.map((card, index) => (

                <article key={index} className="card-box">
                    <article className="box-buttons">
                        <Link target="_blank" to={card.link} className="btn-portfolio btn-link">Ver Online</Link>
                    </article>

                    <img className="img" src={card.imgSrc} alt={card.alt} />
                </article>
            ))}
            </section>
        </header>
    );
}

export default Portfolio;