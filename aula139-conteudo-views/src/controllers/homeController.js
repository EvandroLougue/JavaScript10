exports.paginaInicial = (req, res) => {
    console.log(req.flash('error'), req.flash('success'), req.flash('info'))
    console.log('Respondendo ao cliente...');
    res.render('index', {
        titulo: 'Título da página',
        numeros: [0,1,2,3,4,5,6,7,8,9] 
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send('Formulário recebido');
}