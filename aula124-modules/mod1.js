const nome = 'Evandro';
const sobrenome = 'Lougue';

const falaNome = function() {
    console.log(nome, sobrenome);
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome;
this.qualquerCoisa = 'Qualquer coisa';


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;