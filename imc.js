console.log("Helo, Baby!");

//let pesoPrompt = prompt("Digite seu peso: ");
//let alturaPrompt = prompt("Digite sua altura: ");

//console.log(typeof pesoPrompt);
//console.log(typeof alturaPrompt);

const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");

function calcularImc() {
    let calculo = pesoInput / alturaInput ** 2;

    return calculo;
}

console.log(calcularImc(78, 1.84));

function retornarCategoria() {
    const resultadoImc = calcularImc(pesoInput.value, alturaInput.value);
    if (resultadoImc < 18.5) {
        return "Abaixo do peso";
    } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
        return "Peso normal";
    } else if (resultadoImc >=25 && resultadoImc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

function exibirResultado() {
    console.log(calcularImc(pesoInput.value, alturaInput.value), retornarCategoria());
}

console.log(retornarCategoria());
