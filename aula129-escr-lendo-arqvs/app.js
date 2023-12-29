const path = require('path');
const caminhoArq = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
/*
const pessoas = [
    {nome: 'João'},
    {nome: 'Evandro'},
    {nome: 'Luis'}
];

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArq, json);
*/

async function lerArq(caminho) {
    const dados = await ler(caminho);
    renderiza(dados);
}

function renderiza(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

lerArq(caminhoArq);


/*
const dadosArq = lerArq(caminhoArq)
    .then(dados => console.log(dados))
    .catch(erro => console.log(erro));
    */