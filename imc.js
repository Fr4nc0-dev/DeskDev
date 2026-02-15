    function calcularImc() {
    const peso1 = window.document.getElementById("peso");
    const altura2 = window.document.getElementById("altura");
    const n1 = Number(peso1.value);
    const n2 = Number(altura2.value);
    const Imc = n1 / n2 ** 2;
    const res = window.document.getElementById("res");
    res.innerHTML = `O resultado do seu IMC é <strong>${Imc}</strong>!!!.`;
    }
