const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  const simply = []
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    if (!simply.includes(element, 0)) {
      simply.push(element)
    }
  }
  return console.log(simply)
}
removeDuplicates(duplicates)
