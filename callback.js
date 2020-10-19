const soma = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10, 20, soma));


const nomeCompleto = (nome, sobreNome) => nome + ' ' + sobreNome;

const saudar = (nome, sobreNome, callback) => 'olá ' + callback(nome, sobreNome) + '!';

console.log(saudar('Carlos', 'Eduardo', nomeCompleto));