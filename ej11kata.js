const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let sumN = 0
  let sumL = 0
  let result = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    if (typeof element === `number`) {
      sumN += element
    } else {
      sumL += element.length
    }
  }
  result = sumN + sumL
  return console.log(`El resultado es ` + result)
}

averageWord(mixedElements)
