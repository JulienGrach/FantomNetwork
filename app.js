"use strict";

//CONFIG
const env = require('./env.json');

//DEPENDENCIES
const express = require('express');
const app = express();
const ejs = require('ejs');

const session = require('express-session');
const formidable = require('formidable');
const methodOverride = require ('method-override');

//ROUTES
const publicsRoutes = require('./Routes/publicsRoutes');
const usersRoutes = require('./Routes/usersRoutes');
const postsRoutes = require('./Routes/postsRoutes');

//CONFIGURATION SERVER
app.set('view engine', 'ejs');

//SERVER

    //Directory Public
app.use(express.static('public'))

    //Session
    .use(session({
        cookie: { maxAge : 600000},//expiration de connection 10 min
        rolling: true,//Reset l'expiration pour chaque res
        secret: 'FantomNetwork secret cookie',//signature du cookie de session ?
        resave: false,
        saveUninitialized: true
        }))

    //Formular Parse
    .use((req, res, next)=>{
        if (req.method == 'POST') {
            let form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files)=>{
                if (err) secure.error(err, res);
                req.body = fields;
                req.body.FILES = files;
                next();
            });
        }else{
            next();
        }
    })

    //Gestion Method
    .use(methodOverride((req, res)=>{
            if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                let method = req.body._method;
                delete req.body._method;
                return method
            }
        })
    )

    //Routers Integration
    .use(publicsRoutes)
    .use(usersRoutes)
    .use(postsRoutes);

//PORT SERVER
app.listen(env.PORT);

