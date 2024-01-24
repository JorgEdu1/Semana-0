import nodemailer from 'nodemailer';//para enviar email
import * as dotenv from 'dotenv';//para usar variaveis de ambiente
dotenv.config();

export class EmailController {
    
    static async sendEmail(req, res) {

        const { userEmail, userName, subject, msg } = req.body;//pegando os dados do corpo da requisição

        //config
        const smtp = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            },
            secure: 'starttls',
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            }
        });
        
        //config email
        const configEmail = {
            from: "Tester <testernodemailer7@gmail.com>",
            to: "jorge.eduardo@alu.ufc.br",
            subject: 'Nova Mensagem de ' + userName + ' - ' + subject, 
            html: '<h1> Email: ' + userEmail + '</h1>' + '<h1> Mensagem: ' + msg + '</h1>',
        }

        try {//tentando enviar o email
            await smtp.sendMail(configEmail);
            res.status(200).send('Email enviado com sucesso'); //enviando a resposta para o front
        } catch (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar email'); //enviando a resposta para o front
        }

    }

}