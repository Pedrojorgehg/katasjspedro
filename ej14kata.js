//*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  const counts = {}
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    if (counts[element]) {
      counts[element]++
    } else {
      counts[element] = 1
    }
  }

  for (const [word, count] of Object.entries(counts)) {
    console.log(`${word}: ${count}`)
  }
}

repeatCounter(counterWords)
