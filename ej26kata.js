//*Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.
const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
function goodOrBad(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i]
    if (element.sellCount > 20) {
      goodProducts.push(element)
    } else {
      badProducts.push(element)
    }
  }
  return console.log(
    `the good products are ${goodProducts} and de bad products are ${badProducts}`
  )
}
