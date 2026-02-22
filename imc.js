    function calcularImc() {
    const peso1 = window.document.getElementById("peso");
    const altura2 = window.document.getElementById("altura");
    const n1 = Number(peso1.value);
    const n2 = Number(altura2.value);
    const Imc = n1 / n2 ** 2;
    const res = window.document.getElementById("res");
    res.innerHTML = `O resultado do seu IMC é <strong>${Imc}</strong>!!!.`;
    }

    function reportar() {
        if (res <= 18,5) {
            console.log('Você está abaixo do peso.');
        } else if (res > 18.5) || (res < 24.9) {
            console.log('Você está com o peso normal.');
        } else if (res > 25) || (res < 29.9) {
            console.log('Você está com sobrepeso.');
        } else if (res > 30) || (res < 34.9) {
            console.log('Você está com obesidade grau I.');
        } else if (res > 35) || (res < 39.9) {
            console.log('Você está com obesidade grau II.');
        } else {
            console.log('Você está com obesidade grau III! Procure um médico.')
        }
    }