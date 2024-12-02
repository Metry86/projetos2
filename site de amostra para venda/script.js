


const formulario = document.querySelector(".formulario")
const visivel = document.querySelector(".mascara-formulario")




function PedirOrcamento() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    visivel.style.visibility = "visible"
}
function EsconderOrcamento() {
    formulario.style.left = "-270px"
    formulario.style.transform = "translateX(0)"
    visivel.style.visibility = "hidden"
}