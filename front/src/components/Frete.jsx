import React, { useState } from 'react';
import axios from 'axios';

const Frete = () => {
    const [cep, setCep] = useState('');
    const [respostas, setRespostas] = useState([]);
    const [mostrarRespostas, setMostrarRespostas] = useState(false);
    const url = 'http://localhost:4000/calculate/';

    const handleChange = (e) => {
        setCep(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, { "postal_code": cep })
            .then((response) => {
                setRespostas(response.data);
                setMostrarRespostas(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div id='freteId' className="frete-container">
            <div className="form-frete">
                <h1>Calcule o frete: </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cep">CEP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cep"
                            placeholder="CEP"
                            value={cep}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Calcular
                    </button>
                </form>
                {mostrarRespostas && (
                <div className="respostas-frete">
                    {respostas.map((resposta, index) => (
                        <div key={index} className="card">
                            <img className="card-img-top" src={resposta.company.picture}alt="Imagem de capa do card" />
                            <div className="card-body">
                            <p>Frete: {resposta.currency}{resposta.price}</p>
                            <p>Entrega: {resposta.delivery_time} dias</p>
                            </div>
                        </div>
                    ))}
                </div>          
            )}
            </div>

            <div className="map-frete">
                <h1>Nossa Localizacao: </h1>
                <iframe
                    className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.53302292835!2d-39.33046632439333!3d-7.2257708983852895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1825d4a8524e3%3A0xf5f371c3331bb8dc!2zQ2FqdcOtbmEgU8OjbyBHZXJhbGRv!5e0!3m2!1spt-BR!2sbr!4v1706029366339!5m2!1spt-BR!2sbr"
                ></iframe>
            </div>
        </div>
    );
};

export default Frete;
