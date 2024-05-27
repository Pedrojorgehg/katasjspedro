const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, name) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    let positon = 0
    if (element === name) {
      positon = param.indexOf(element)
      return console.log(true, `la posicion es ${positon}`)
    }
  }
  console.log(false)
}
/* finderName(nameFinder, `paco`) */
finderName(nameFinder, `Peggy`)
