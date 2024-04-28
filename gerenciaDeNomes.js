function dividirNumeros() {
    const primeiroNumero = parseFloat(document.getElementById('primeiroNumero').value);
    const segundoNumero = parseFloat(document.getElementById('segundoNumero').value);
    const resultado = document.getElementById('resultadoDivisao');

    if (segundoNumero !== 0) {
        const resultadoDivisao = primeiroNumero / segundoNumero;
        resultado.value = resultadoDivisao;
    } else {
        resultado.value = "Não é possível dividir por zero!";
    }
}

// Exportando a função dividirNumeros
module.exports = {
    dividirNumeros: dividirNumeros
};