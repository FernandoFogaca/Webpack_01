require("./index.css");
const { dividirNumeros } = require("./gerenciaDeNomes.js"); // Importando a função dividirNumeros

console.log("Olá mundo PRO!");

function concatenarNomes() {
    const primeiroNome = document.getElementById('primeiroNome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const resultado = document.getElementById('resultadoConcatenacao');

    const nomeCompleto = primeiroNome + ' ' + sobrenome;
    resultado.value = nomeCompleto;
}

document.getElementById('btnConcatenar').addEventListener('click', concatenarNomes);

// Movendo a adição do ouvinte de evento para o final do arquivo
// Assim, garantimos que o botão "Dividir" já foi renderizado no DOM
document.getElementById('btnDividir').addEventListener('click', dividirNumeros);