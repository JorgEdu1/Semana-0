import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

export class EmailController {
    
    static async sendEmail(req, res) {

        const { userEmail, userName, subject, msg } = req.body;

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
        
        const configEmail = {
            from: "Tester <testernodemailer7@gmail.com>",
            to: "jorge.eduardo@alu.ufc.br",
            subject: 'Nova Mensagem de ' + userName + ' - ' + subject, 
            html: '<h1> Email: ' + userEmail + '</h1>' + '<h1> Mensagem: ' + msg + '</h1>',
        }

        try {
            await smtp.sendMail(configEmail);
            res.send('Email enviado com sucesso');
        } catch (error) {
            console.log(error);
            res.send('Erro ao enviar email');
        }

    }

}