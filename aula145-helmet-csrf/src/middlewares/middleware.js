exports.meuMiddleware = (req, res, next) => {
    res.locals.varLocal = 'Valor da variável local'
    next();
}

module.exports = (req, res, next) => {

    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Lougue', 'NÃO USE LOUGUE')
        console.log();
        console.log(`Nome do cliente: ${req.body.cliente}`);
        console.log();
    }
    next();
}

exports.checkCsrfError = (erro, req, res, next) => {
    if(erro && erro.code === 'EBADCSRFTOKEN') {
        return res.render('../views/404.ejs');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};