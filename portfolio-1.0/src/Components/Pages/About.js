// Importações de Imagens
import desktopImage from '../../imagens/webPage02.jpg';

// Importação de Estilo
import '../../styles/About.scss';

function About() {
  return (
    <section className='container-about'>
      <article className='box-img'>
        <img className='img-desktop' src={desktopImage} alt='Imagem de Desktop Ilustrativa' />
      </article>
      <article className='box-text'>
        <h2>Quem sou eu?</h2>
        <p>
          Muito prazer empreendedor, como já foi mencionado meu nome é Gabriel e sou{' '}
          <span>Desenvolvedor Full-Stack</span>.
        </p>
        <br />
        <p>
          Com dois anos de experiência, trabalho com Django, Flask, Python, JavaScript, React,
          HTML5, CSS6, Sass e Bootstrap. Embora eu tenha conhecimento para o Back-End, tenho mais
          experiência com Front-End.
        </p>
        <br />
        <p>
          Estou mergulhando em C++ e Banco de Dados para expandir meus horizontes. Se você procura
          um desenvolvedor dedicado, apaixonado por criar experiências envolventes, estou pronto
          para levar seu projeto para o próximo nível.
        </p>
        <br />
        <h6>Juntos vamos tornar a sua ideia realidade!</h6>
      </article>
    </section>
  );
}

export default About;
