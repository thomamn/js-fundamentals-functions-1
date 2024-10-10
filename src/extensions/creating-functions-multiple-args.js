// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below

function between(a,b){
  const numbers=[]
  for (let i = a; i <= b; i++) {
    numbers.push(i)
  }

  return numbers
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below

function exclaim(word, marks){
  let sentence=word.toUpperCase()

  for (let i=0; i<marks; i++){
    sentence+='!'
  }

  return sentence
  
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below

function future(presentTime, minutes){
  const time=presentTime.split(':')
  const extraMinutes=minutes % 60
  let extraHours=(minutes-extraMinutes)/60
  let futureMinutes=Number(time[1])+extraMinutes


  if(futureMinutes>=60){
    extraHours+=1
    futureMinutes-=60
  }
  let futureHours=Number(time[0])+extraHours
  let minuteText=String(futureMinutes)
  if (minuteText.length === 1){
    minuteText = '0' + minuteText
  }

  let hourText=String(futureHours)

  if (futureHours>=24){
    hourText='00'
  }

  


  return hourText + ':' + minuteText
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: between, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclaim, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: future // etc
}
