const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(long) {
  for (let i = 0; i < long.length; i++) {
    const element = long[i]
    /* console.log(element) */
    let x = 0
    if (element.length > x) {
      x = element.length
      console.log(x)
    } else {
    }
  }
}
findLongestWord(avengers)
