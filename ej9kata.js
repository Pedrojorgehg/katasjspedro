const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    result += element
  }
  return console.log(`El resultado es ` + result)
}

sumAll(numbers)
