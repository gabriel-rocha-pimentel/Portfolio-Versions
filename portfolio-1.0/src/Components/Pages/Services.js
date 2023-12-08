// Importando Estilos
import '../../styles/Services.scss';

// Importando Icons
import { SlArrowDownCircle } from "react-icons/sl";

// Importando Imagens
import moneyPlant from '../../imagens/webPage03-1.png';
import moneyCard from '../../imagens/webPage03-2.png';
import moneyMagazine from '../../imagens/webPage03-3.png';

function Services() {
    return (
        <section className="container-services">
            <h2>O Que Vamos Criar Hoje ?</h2>

            <article className="box-services">
                <article className="card-1 services-card">

                    <div className='content-image'>
                        <img  src={moneyMagazine} alt='Imagem ilustrativa de revista' />
                    </div>

                    <div className='content-card'>
                        <h3>Landing Pages</h3>
                        <p>
                            Transforme visitantes em clientes com landing pages 
                            que não apenas atraem, mas <span>convertem</span>. 
                            Seu <span>sucesso</span> começa no primeiro clique.
                        </p>
                        <SlArrowDownCircle className="icon-seta" size={50} color="#5EC57E" />
                    </div>
                </article>

                <article className="card-2 services-card">

                    <div className='content-image'>
                        <img src={moneyCard} alt='Imagem ilustrativa de uma carteira.' />
                    </div>

                    <div className='content-card'>
                        <h3>E-Comerce</h3>
                        <p>
                            Do zero à <span>experiência</span> de compra <span>perfeita</span>. 
                            Desenvolvo e-commerce que não só vendem produtos, 
                            <span>mas também</span> contam histórias. Seu negócio, sua marca, nossa <span>inovação</span>.
                        </p>
                        <SlArrowDownCircle className="icon-seta" size={50} color="#5EC57E" />
                    </div>
                </article>

                <article className="card-3 services-card">

                    <div className='content-image'>
                        <img src={moneyPlant} alt='Imagem ilustrativa de uma arvore de dinheiro.' />
                    </div>

                    <div className='content-card'>
                        <h3>Manutenção</h3>
                        <p>
                            A sua <span>presença online</span> é valiosa demais para ser deixada ao acaso. 
                            Garanto que seu site esteja <span>sempre no auge</span>, funcionando perfeitamente. 
                            Manutenção contínua para um desempenho contínuo.
                        </p>
                        <SlArrowDownCircle className="icon-seta" size={50} color="#5EC57E" />
                    </div>
                </article>
            </article>

        </section>
    )
}

export default Services;