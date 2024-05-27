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
