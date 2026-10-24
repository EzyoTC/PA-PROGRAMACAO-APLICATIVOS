function gerarTabuada() {
    const numeroInput = document.getElementById("numero-input");
    const resultadoDiv = document.getElementById("resultado");
    const numero = Number(numeroInput.value);

    if (numeroInput.value.trim() === "" || !Number.isFinite(numero)) {
        resultadoDiv.textContent = "Digite um número válido.";
        return;
    }

    const linhas = [`<h2>Tabuada do número ${numero}</h2>`];

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const resultado = numero * multiplicador;
        linhas.push(`<p>${numero} x ${multiplicador} = ${resultado}</p>`);
    }

    resultadoDiv.innerHTML = linhas.join("");
}

const botaoGerar = document.getElementById("btn-gerar");

botaoGerar.addEventListener("click", gerarTabuada);