//*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//*Puedes usar este array para probar tu función:
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  `la super hormiga atomica`,
  'Captain M.'
]

function superFind(funy) {
  const superfunny = []
  for (let i = 0; i < funy.length; i++) {
    const element = funy[i]
    superfunny.push(element.length)
  }
  let thebasic = 0
  let theBigPosition = superfunny[0]

  for (let j = 1; j < superfunny.length; j++) {
    if (superfunny[j] > theBigPosition) {
      theBigPosition = superfunny[j]
      thebasic = j
    }
  }

  return thebasic
}
const longestWordIndex = superFind(avengers)
console.log(`La palabra más larga es: ${avengers[longestWordIndex]}`)

superFind(avengers)
