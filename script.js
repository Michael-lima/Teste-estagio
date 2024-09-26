//Pergunta 1

let INDICE = 13;
let SOMA = 0;

for (let K = 1; K <= INDICE; K++) {
    SOMA = SOMA + K;
}

document.getElementById("resultado_1").textContent = `O resultado da soma é: ${SOMA}`;


//Pergunta 2

function fibonacci(num) {
    let a = 0, b = 1, temp;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b === num;
}

const numeroInformado = 21;
const resultado = fibonacci(numeroInformado)
    ? `${numeroInformado} pertence à sequência de Fibonacci.`
    : `${numeroInformado} não pertence à sequência de Fibonacci.`;

document.getElementById("resultado_2").textContent = resultado;

//Pergunta 3

const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

function calcularFaturamento(faturamento) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    faturamento.forEach(dia => {
        if (dia.valor > 0) {
            if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
            if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;

            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = 0;
    faturamento.forEach(dia => {
        if (dia.valor > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    });

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const result = calcularFaturamento(faturamentoDiario);
const resultadoDiv = document.getElementById("resultado_3");
resultadoDiv.innerHTML = `
  <p>Menor faturamento: R$ ${result.menorFaturamento.toFixed(2)}</p>
  <p>Maior faturamento: R$ ${result.maiorFaturamento.toFixed(2)}</p>
  <p>Dias com faturamento acima da média: ${result.diasAcimaDaMedia}</p>
`;

//Pergunta 4
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    let resultadoHTML = '';

    for (let estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;
        resultadoHTML += `<p>${estado}: ${percentual.toFixed(2)}%</p>`;
    }

    document.getElementById("resultado_4").innerHTML = resultadoHTML;
}

calcularPercentual(faturamento);


//Pergunta 5

const str = "exemplo";

        function inverterString(str) {
            let invertida = "";

            for (let i = str.length - 1; i >= 0; i--) {
                invertida += str[i];
            }

            return invertida;
        }

        const stringInvertida = inverterString(str);
        document.getElementById("resultado_5").innerHTML = `String original: ${str} <br> String invertida: ${stringInvertida}`;