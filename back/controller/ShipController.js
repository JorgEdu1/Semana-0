import axios from 'axios';
const url = 'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate'//url da api do melhorenvio

export class ShipController {
    static calculateShip(req, res) {

        const cep = req.body.postal_code;//pegando o cep do corpo da requisição

        //fazendo a requisição para a api do melhorenvio, precisa passar o cep de origem e o cep de destino e o token de autorização mais alguns headers
        axios.post(url, {
            "from": {
                "postal_code": "63022115"
            },
            "to": {
                "postal_code": cep
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTYiLCJqdGkiOiIzNGQ2MTFkMWQ1ZjE3ZjhlMzUxZGRkYjY5MWEzNzhmNWRjNTg4NjFjNDY1MTJlMTZkYjExMjMwNWNmN2E2ZjJjZmYxNzAxNThhMGYxYTJiYyIsImlhdCI6MTcwNTk2NTc1NC4wNTM2NzcsIm5iZiI6MTcwNTk2NTc1NC4wNTM3MSwiZXhwIjoxNzM3NTg4MTU0LjAyNzk2Nywic3ViIjoiOWIyODFiZGMtYmZhNC00NDYyLWFjNDMtMWNmYWY4OGUxY2ZkIiwic2NvcGVzIjpbInNoaXBwaW5nLWNhbGN1bGF0ZSJdfQ.epew7EuSfmM_2AsEEUGc9b0pluzUOCG0uUI5HarXFB2Nu8dY1HZCxn_saA4WVO3AabJFkQf5UnA446RX7oksLtY6jvVgwiDuMLlyV0aylwHse37GNFNsknJmr6Ik7eTIo5R-LP_Me1dxZRX-7hJbCnGy9dLkItAlw6kHVkoKO0QntmzWcSR-p2AetrJNomWW4NAQ_TTvmVLX5vpADoa0ouyGbVELVIKmtXcUVQj9RvMpCj6leug7c_Y8b2dhrftat2mJlxfUCXtEWtpSyQ3OUnAMi9YgKzqksp66SMGlPgCl86DeFuNZJ9DU3gOprFxdjkYdrgmC4izxls8jyIYqMgMont8Knkqj0ujjRIPxQMAK00c1UWtp-yzQ0TZ2yBO5ZIp26FuIsbA2k9KK384J3QkcMjFlUHEOJV_PTX8C11WDAHlwc5P14vXKIVIIVp6sEXzIqq3gd2_a2E9vgNXqcEkuqdecAFpTyvMmdE2WFLSV5eEgb1G4HNGo4lH_uYBJRA3vyQaE3GaQ9qV7nFu7K5pNq-Fl6EqxTZJq1MZOmTTzCoS2GpYeEwY8vROHaMKLAFHdlx3m0O_PsgmaVGFPF_9xSQ-hb8hKc6rY7A1bhrUtCg4NkMhX4cp-cM_aDOAy-jdHTtZQaZxBmedpaIEFyAobt5q1nLIqPzFkvIb3e7M',
                'user-agent': 'Aplicacao teste'
            }
        }).then((response) => {
            res.send(response.data);//enviando a resposta da api para o front
        }
        ).catch((error) => {
            res.send(error);//enviando o erro para o front
        });
    }
}