/**
 * Created by tostaky on 10/08/17.
 */

//NEED && CONFIG
const env = require('./env.json');

const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: env.NODEMAILER.service,
    auth: {
        user: env.NODEMAILER.user,
        pass: env.NODEMAILER.pass
    }
});


//HANDLER
const secure = require('./controller/handler/secure');


//MODULE
function sendError(username, error){
    let mailObject = {
        from: 'Fantom Network',
        to: env.NODEMAILER.admin,
        subject: 'ERROR: '+username,
        text: error,
        html: error
    };

    transporter.sendMail(mailObject, function(err, info){
        if(err) secure.error(err);
        console.log('Message sent: ' + info.response);
    });

    transporter.close();
    return true
}

function newInscription(user){
    let mailObject = {
        from: 'Fantom Network',
        to: env.NODEMAILER.admin,
        subject: 'Inscription: '+user.username,
        text: 'Inscription : '+user.username + ': '+user.mail,
        html: 'Inscription : '+user.username + ': '+user.mail
    };

    transporter.sendMail(mailObject, function(err, info){
        if(err) console.log(err);
        console.log('Message sent: ' + info.response);
    });

    transporter.close();
    return true
}

function forgetPass(user){
    let mailObject = {
        from: 'Fantom Network',
        to: user.mail,
        subject: 'Mot de passe oublié',
        text: 'Bonjour ' + user.username +
        'Un mot de passe provisoire vous a été attribué, ' +
        'connectez vous avec votre username et changez votre mot de passe dans "Mon Compte:\n"' +
        'username : '+ user.username + '\n' +
        'password : '+ user.password,
        html: 'Bonjour <i>' + user.username + '</i>' +
        'Un mot de passe <b>provisoire</b> vous a été attribué, ' +
        'connectez vous avec votre username et changez votre mot de passe dans "Mon Compte:\n"' +
        '<b>username </b>: '+ user.username + '\n' +
        '<b>password </b>: '+ user.password
    };

    transporter.sendMail(mailObject, function(err, info){
        if(err) secure.error(err);
        console.log('Message sent: ' + info.response);
    });

    transporter.close();
    return true
}

module.exports = {
    forgetPass : forgetPass,
    newInscription : newInscription,
    sendError : sendError
};