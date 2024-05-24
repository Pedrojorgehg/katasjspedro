const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  `la super hormiga atomica`,
  'Captain M.'
]
function findLongestWord(long) {
  let x = ``
  for (let i = 0; i < long.length; i++) {
    const element = long[i]

    if (element.length >= x.length) {
      x = element
    } else {
      return console.log(x)
    }
  }
}
findLongestWord(avengers)
