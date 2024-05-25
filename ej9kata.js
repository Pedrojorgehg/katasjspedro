const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(array) {
  let result = 0
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    console.log(element)
    while (i < array.length) {
      /*  result += array[i]  */
      result += element
      console.log(result)
    }
  }
}

sumAll(numbers)
