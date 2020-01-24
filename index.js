// Your code here
function saturdayFun(activity= "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity= "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(style= "*"){
  return function(string= "special"){
    return `You are ${style}${string}${style}!`
  }
}


const Calculator = {
  add: (a,b) => {
    return a + b
  },
  subtract: (a,b) => {
    return a - b
  },
  multiply: (a,b) => {
  return  a * b

  },
  divide: (a,b) => {
    return a/b
  }
}

function actionApplyer(start, arr){
  let sp = start

    for (var i = sp; i < arr.length; i++) {
      sp = array[i][start]
    }
    return sp
}
