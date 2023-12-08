// Importando Imagens
import valuesImage from '../../imagens/webPage05.png';

// Importando Estilos
import '../../styles/Values.scss';
import { Link } from 'react-router-dom';

function Values() {
    return (
        <section className='container-values'>
            <article className='boxImage-values'>
                <img className='img-values' src={valuesImage} alt='Imagem ilustrativa de balança' />
            </article>
            <article className='values-text'>
                <h2>
                    Experiência,<span>compromisso</span> e valor. 
                    É minha <span>missão</span> proporcionar isso de
                    forma consistente para meus <span>clientes</span>.
                </h2>
            </article>

            <Link to="/contatos">
                <button className='btn btn-values'>Agendar Reunião</button>
            </Link>
        </section>
    );
}

export default Values;