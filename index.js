// Your code here
function saturdayFun(event = 'roller-skate') {
  return `This Saturday, I want to ${event}!`
}

function mondayWork(task = 'go to the office') {
  return `This Monday, I will ${task}.`
}

let wrapAdjective = function (star = '*') {
  return function (magic = 'special') {
    return `You are ${star}${magic}${star}!`
  }
}

let Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}

function actionApplyer(num, arr) {
  if (arr.length === 0) {
    return num
  } else {
  for (let i = 0; i < arr.length; i++) {
      num = arr[i](num)
    }
    return num
  }
}
