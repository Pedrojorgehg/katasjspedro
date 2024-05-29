//*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

//*"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
function areYouOver18(params) {
  for (let i = 0; i < params.length; i++) {
    const element = params[i]
    if (element.years >= 18) {
      console.log(`${element.name} Usuario mayor de edad`)
    } else {
      console.log(`${element.name} Usuario menor de edad`)
    }
  }
}
areYouOver18(users)
