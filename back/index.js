import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());//para a API entender o formato json
app.use(cors());//para a API entender requisições de outros domínios

//import routes
import emailRouter from './routes/email.routes.js';//importando as rotas do email(so uma rs)
import shipRouter from './routes/ship.routes.js';//importando as rotas do frete(so uma rs)

app.use('/sendEmail', emailRouter);//usando as rotas do email
app.use('/calculate', shipRouter);//usando as rotas do frete

app.listen(4000, () => {
    console.log('API Started!');
});

