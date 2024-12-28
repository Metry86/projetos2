
const butaoConverter = document.querySelector(".Converter")
const moedaSelecionada = document.querySelector(".moeda-selecionada")







function converterValor() {
    const valorDigitado = document.querySelector(".valorDigitado").value


    const dolar = 6.37
    const euro = 7.00
    const real = 1.00
    // const cambio = valorDigitado / dolar

    const valorReal = document.querySelector(".real")
    const valorDolar = document.querySelector(".dolar")
    const valorEuro = document.querySelector(".euro")
    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado)
    valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorDigitado / dolar)
    valorEuro.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorDigitado / euro)
}
butaoConverter.addEventListener("click", converterValor)

// grafico
var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
// grafico
