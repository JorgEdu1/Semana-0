import React from "react";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {

    const url = 'http://localhost:4000/sendEmail/';

  const [formData, setFormData] = useState({
    userEmail: '',
    userName: '',
    subject: '',
    msg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados para o seu backend
    try {
      const response = await axios.post(url, formData);

      // Lógica de tratamento da resposta do backend, se necessário
      alert('Email enviado com sucesso!')
    } catch (error) {
      alert('Erro ao enviar email!')
    }
  };

  return (
    <div id="formId" className="contact-container">
      <div className="info-container">
        <h2 id="name1">Contato</h2>
        <p>
          Fique a vontade para entrar em contato conosco, tire suas dúvidas ou deixe sua sugestão. Arrocha aí!
        </p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Email:
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Nome:
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Assunto:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Mensagem:
            <textarea
              name="msg"
              value={formData.msg}
              onChange={handleChange}
              className="form-input form-textarea"
            />
          </label>

          <button type="submit" className="form-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;