module.exports = (req, res, next) => {

    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Lougue', 'NÃO USE LOUGUE')
        console.log();
        console.log(`Nome do cliente: ${req.body.cliente}`);
        console.log();
    }

    next();
}