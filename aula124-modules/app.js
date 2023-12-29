//const mod1 = require('./mod1');
//mod1.falaNome()

const {nome, sobrenome, falaNome} = require('./mod1');

falaNome()

const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Evandro');
console.log(p1);

const path = require('path');
console.log(path);