const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let result = 0
  let sumArray = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    sumArray += element
  }
  result = sumArray / param.length
  return console.log(`La media es ` + result)
}
average(numbers)
