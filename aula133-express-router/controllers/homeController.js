exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar formulário</button>
    </form>
    `)
}

exports.trataPost = (req, res) => {
    res.send('Formulário recebido');
}