// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/agu - 1000ml por pessoa + 6horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let horas = inputDuracao.value
  console.log("calculando")
 
  if (horas <= 6){
  let qdtTotalCarne = 400 * adultos + (400 / 2 * criancas)
  let qdtTotalCerveja = 1200 * adultos
  let qdtTotalBebidas = 1000 * adultos + (1000 / 2 * criancas)

  resultado.innerHTML = `<p> ${qdtTotalCarne}g de Carne </p>`
  resultado.innerHTML += `<p> ${qdtTotalCerveja}g de Cerveja </p>`
  resultado.innerHTML += `<p> ${qdtTotalBebidas}g de Bebidas </p>`


  } else if (horas > 6) {
  let qdtTotalCarne = 600 * adultos + (600 / 2 * criancas)
  let qdtTotalCerveja = 2000 * adultos
  let qdtTotalBebidas = 1500 * adultos + (1500 / 2 * criancas)

  resultado.innerHTML = `<p> ${qdtTotalCarne}g de Carne </p>`
  resultado.innerHTML += `<p> ${qdtTotalCerveja}g de Cerveja </p>`
  resultado.innerHTML += `<p> ${qdtTotalBebidas}g de Bebidas </p>`
  }
}

