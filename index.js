// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(str="*"){
    return function(par='special'){
        return `You are ${str}${par}${str}!`
    }
}
let Calculator={add:function(a,b){return a+b},subtract:function(a,b){return a-b},multiply:function(a,b){return a*b},divide:function(a,b){return a/b},}

function actionApplyer(intr,arr){
    let a=intr
    if(!arr.length){
        return intr
    }
    else{
        
        for(let i=0;i<arr.length;i++){
           a=arr[i](a)
        }
        return a
    }
}