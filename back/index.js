import express from 'express';
const app = express();

app.use(express.json());

//import routes
import emailRouter from './routes/email.routes.js';

app.use('/sendEmail', emailRouter);

app.listen(3000, () => {
    console.log('API Started!');
});

