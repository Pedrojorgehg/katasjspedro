//*Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
function sellCount(params) {
  let resul = 0
  for (let i = 0; i < params.length; i++) {
    const element = params[i]
    resul += element.sellCount
  }
  return console.log(resul)
}
sellCount(products)
