//*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
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
