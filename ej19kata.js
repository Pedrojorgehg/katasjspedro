//*Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
function catKiller(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i]
    if (element.name.includes(`gato`)) {
      params.splice(i, 1)
      i--
    }
  }
  console.log(params)
}
catKiller(toys)
