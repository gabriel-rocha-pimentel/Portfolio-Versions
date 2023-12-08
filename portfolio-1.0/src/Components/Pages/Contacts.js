// Importando estilos
import '../../styles/Contacts.scss';

// Importando components
import Menu from '../Menu';

// Importando configurações
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    
    emailjs.send("service_pwdk3l9", "template_edvbckd", templateParams, "pJPhW8TfdbIxfee1m")
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {
    console.log("Error ", err)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', { name, email, message });
  };

  return (
    <section className="container-contato">
      <Menu />

      <article className='box-form'>
        <h2 className="title">Contato</h2>

        <form className="form-contact" onSubmit={handleSubmit}>
          <input 
            className="input input-name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
  
          <input 
            className="input input-email"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className="input textarea"
            placeholder="Escreva sua proposta"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <button onClick={sendEmail} className="btn" type="submit">ENVIAR</button>
        </form>
      </article>
    </section>
  );
}

export default Contacts;
