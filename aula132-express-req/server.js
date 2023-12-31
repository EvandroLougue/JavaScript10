const express = require('express');
const app = express();

app.use(
    express.urlencoded ({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar formulário</button>
    </form>
    `)
})

app.get('/testes/:idUser?/:parametro?', (req, res) => {
    console.log(req.params);        // profile/123/blabla
    console.log(req.query);         //profile/?chave1=algo&chave2=algo2
    res.send(req.params);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Você escreveu: ${req.body.nome}`);
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
}); 