// Importando Imagens
import workGroup from '../../imagens/webPage06.png';

// Importando Estilos
import '../../styles/End.scss';

// Importando Icons
import { BiSolidBot } from "react-icons/bi";
import { Link } from 'react-router-dom';

function End() {
    return (
        <footer className='container-footer'>
            <section className='box-contact'>
                <article className='logo' id="footer-logo">
                    <BiSolidBot className='bot-img' size={75} color="#5EC57E" />
                    <p>GABRIEL ROCHA<br></br>PIMENTEL</p>
                </article>

                <article className='content-contact'>
                    <article className='about-contact'>
                        <h2>Inove Conosco</h2>
                        <p>
                            Desbrave o futuro da tecnologia e Inove,
                            transformando possibilidades em realidade.
                        </p>
                    </article>
                    
                    {/* Se for um link interno */}
                    <Link className='about-btn' to="/contatos">
                        <button className='btn' id="btn-footer">Começar Agora</button>
                    </Link>
                    
                    {/* Se for um link externo */}
                    {/* <a className='about-btn' href="URL EXTERNA">
                        <button className='btn' id="btn-footer">Começar Agora</button>
                    </a> */}
                </article>
            </section>
            <section className='contact-img'>
                <img className='imgPeople-work' src={workGroup} alt='Imagem ilustrativa de pessoas trabalhando' />
            </section>
        </footer>
    );
}

export default End;
