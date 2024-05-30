//*Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
function medium(params) {
  let resul = 0
  for (let i = 0; i < params.length; i++) {
    const element = params[i]
    resul += element.sellCount
  }
  console.log(resul)
  return console.log(`la media de ventas es ${resul / params.length}`)
}
medium(products)
