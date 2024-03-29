require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectado ao MONGODB')
        app.emit('Pronto')
    })
    .catch(e => {
        console.log(e, 'ERRO AO CONECTAR MONGODB')
    });


const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded ({extended: true}));
app.use(express.static('./public'))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);
app.use(routes);

app.on('Pronto', () => {
    app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
}); 
})

