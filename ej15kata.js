//*Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
function finderClothes(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i]
    if (element.includes(`Camiseta`)) {
      console.log(element)
    }
  }
}
finderClothes(products)
