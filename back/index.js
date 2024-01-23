import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

//import routes
import emailRouter from './routes/email.routes.js';
import shipRouter from './routes/ship.routes.js';

app.use('/sendEmail', emailRouter);
app.use('/calculate', shipRouter);

app.listen(4000, () => {
    console.log('API Started!');
});

