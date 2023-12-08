// Importando Estilos
import '../../styles/Main.scss';

// Importando configurações
import { Link } from 'react-router-dom';

// Importando Icons
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SlArrowRightCircle } from "react-icons/sl";
import { FaReact } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

function Main() {
    return (
        <main className='container-main'>
            <section className='box-main'>
                <section className='container-cards'>
                    <Link target='_blank' className='box-cards boxCard-1' to="https://www.linkedin.com/in/gabriel-rocha-pimentel">
                        <article className='card card-1'>
                            <article className='linkedin-icon'>
                                <TiSocialLinkedinCircular className='linkedin' size={75} color="#ffffff" />
                            </article>

                            <article className='title-card linkedin-title'>
                                <h2>Linkedin<br></br>Gabriel Rocha</h2>
                            </article>
                        </article>
                    </Link>

                    <Link target='_blank' className='box-cards boxCard-2' to="https://www.frontendmentor.io/profile/gabriel-rocha-pimentel">
                        <article className='card card-2'>
                            <article className='title-card title-FrontEnd'>
                                <h2>Projetos<br></br>Front-End Mentor</h2>
                            </article>
                        </article>
                    </Link>

                    <Link className='box-cards boxCard-3' to="/contatos">
                        <article className='card card-3'>
                            <article className='title-card title-values'>
                                <h2>Fazer Orçamento</h2>
                            </article>
                        </article>
                    </Link>
                    <article className='box-cards boxCard-4'>
                        <article className='card card-4'>
                            <article className='title-card insert-icon'>
                                <h2>Redes Sociais</h2>
                            </article>

                            <article className='medias-sociais'>
                                <Link target='_blank' to="https://www.facebook.com/profile.php?id=100090889863211">
                                    <FaFacebook className='social-icons facebook' size={40} color="#ffffff" />
                                </Link>

                                <Link target='_blank' to="https://www.instagram.com/gabriel_rocha.p/">
                                    <FaInstagram className='social-icons instagram' size={40} color="#ffffff" />
                                </Link>

                                <Link target='_blank' to="https://mailto:gabrieldrocha21@gmail.com">
                                    <MdOutlineMarkEmailRead className='social-icons email' size={40} color="#ffffff" />
                                </Link>

                                <Link target='_blank' to="https://github.com/gabriel-rocha-pimentel">
                                    <FaGithub className='social-icons gitHub' size={40} color="#ffffff" />
                                </Link>
                            </article>
                        </article>
                    </article>

                    <Link className='box-cards boxCard-5' to="/portfolio">
                        <article className='card card-5 title-card'>
                            <h2>Ver Todos os Projetos</h2>
                            < SlArrowRightCircle className='' size={50} color="#ffffff" />
                        </article>
                    </Link>


                    <Link target='_blank' className='box-cards boxCard-6' to="#">
                        <article className='card card-6'>
                            <article className='title-card title-projects'>
                                <h2> </h2>
                            </article>
                        </article>
                    </Link>

                    <Link target='_blank' className='box-cards boxCard-7' to="#">
                        <article className='card card-7'>
                            <article className='title-card title-projects'>
                                <h2> </h2>
                            </article>
                        </article>
                    </Link>

                    <Link target='_blank' className='box-cards boxCard-8' to="#">
                        <article className='title-card card card-8'>
                            <h2>Tecnologias</h2>

                            <article className="tech-icons">
                                <FaReact className='icon-react' size={75} color="#fff" />
                                <TbBrandDjango className='icon-react' size={75} color="#fff" />
                                <SiFlask className='icon-react' size={75} color="#fff" />
                                <FaPython className='icon-react' size={75} color="#fff" />
                                <RiJavascriptFill className='icon-react' size={75} color="#fff" />
                                <FaHtml5 className='icon-react' size={75} color="#fff" />
                                <FaCss3Alt className='icon-react' size={75} color="#fff" />
                                <AiOutlineConsoleSql className='icon-react' size={75} color="#fff" />
                                <FaNode className='icon-react' size={75} color="#fff" />
                                <DiMongodb className='icon-react' size={75} color="#fff" />
                            </article>
                        </article>
                    </Link>
                </section>
            </section>
        </main>
    );
}

export default Main;