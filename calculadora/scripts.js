function adicionarCaracter(caracter) {
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput + caracter

}
function limpar_tela() {
    const valorInput = document.querySelector('.display').value = ''
}
function calcular() {
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = eval(valorInput)
}
function invert() {

    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput * -1
}