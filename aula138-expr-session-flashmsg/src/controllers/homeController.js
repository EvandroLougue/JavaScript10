exports.paginaInicial = (req, res) => {
    console.log(req.flash('error'), req.flash('success'), req.flash('info'))
    console.log('Respondendo ao cliente...');
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send('Formulário recebido');
}