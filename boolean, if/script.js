// Boolean 38-40

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let resultElephant, resultQueen, resultHorse
let x1 = getRandomNumber(1, 8)
let x2 = getRandomNumber(1, 8)
let y1 = getRandomNumber(1, 8)
let y2 = getRandomNumber(1, 8)
console.log(`Координаты: x1 = ${x1}, y1 = ${y1}, x2 = ${x2}, y2 = ${y2}`)
// 38
resultElephant = Boolean((Math.abs(x1 - x2) == Math.abs(y1 - y2)))

if(resultElephant == true) {
  console.log('Слон за один ход может перейти с одного поля на другое')
}
else {
  console.log('Слон за один ход не сможет перейти с одного поля на другое')
}

// 39

resultQueen = Boolean((Math.abs(x1 - x2) == Math.abs(y1 - y2)) || (x1 == x2) || (y1 == y2))

if(resultQueen == true) {
  console.log('Ферзь за один ход может перейти с одного поля на другое')
}
else {
  console.log('Ферзь за один ход не сможет перейти с одного поля на другое')
}

// 40

resultHorse = Boolean(((Math.abs(x1 - x2) == 2) && (Math.abs(y1 - y2) == 1)) || ((Math.abs(x1 - x2) == 1) && (Math.abs(y1 - y2) == 2)))

if(resultHorse == true) {
  console.log('Конь за один ход может перейти с одного поля на другое')
}
else {
  console.log('Конь за один ход не сможет перейти с одного поля на другое')
}

// If 18-28

// 18

/*let num1, num2, num3
num1 = +prompt('Введіть перше число: ')
num2 = +prompt('Введіть друге число: ')
num3 = +prompt('Введіть третє число: ')

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || (num1 == num2 && num1 == num3) || (num1 != num2 && num1 != num3 && num2 != num3)){
  console.log('Дані введено не вірно.')
}
else {
  if (num1 == num2) {
    console.log('Порядковий номер відмінного числа від двох інших = 3')
  } 
  else if (num2 == num3) {
    console.log('Порядковий номер відмінного числа від двох інших = 1')
  }
  else if (num1 == num3) {
    console.log('Порядковий номер відмінного числа від двох інших = 2')
  }
}
*/

// 19
/*
let num1, num2, num3, num4
num1 = +prompt('Введіть перше число: ')
num2 = +prompt('Введіть друге число: ')
num3 = +prompt('Введіть третє число: ')
num4 = +prompt('Введіть четверте число: ')

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
  console.log('Дані введено не вірно.')
}
else {
  if (num1 == num2 && num1 == num3 && num1 != num4) {
    console.log('Порядковий номер відмінного числа від двох інших = 4')
  } 
  else if (num1 == num2 && num1 == num4 && num1 != num3) {
    console.log('Порядковий номер відмінного числа від двох інших = 3')
  }
  else if (num1 == num3 && num1 == num4 && num1 != num2) {
    console.log('Порядковий номер відмінного числа від двох інших = 2')
  }
  else if (num2 == num3 && num2 == num4 && num2 != num1) {
    console.log('Порядковий номер відмінного числа від двох інших = 1')
  }
  else {
    console.log('Дані введено не вірно.')
  }
}

*/

// 20
/*
let A = +prompt('Введіть перше число: ')
let B = +prompt('Введіть друге число: ')
let C = +prompt('Введіть третє число: ')
let length
if (Math.abs(A - B) < Math.abs(A - C)){
  if ((A - B) > 0) {
    length = A - B
  }
  else {
    length = -1 * (A - B)
  }
  console.log("B, відстань = " + length)
} 
else if (Math.abs(A - B) > Math.abs(A - C)) {
  if ((A - C) > 0) {
    length = A - C
  }
  else {
    length = -1 * (A - C)
  }
  console.log("C, відстань = " + length)
} 
else {
  if ((A - B) > 0) {
    length = A - B
  }
  else {
    length = -1 * (A - B)
  }
  console.log("Точки B та C лежать на однаковій відстані від А = " + length)
}
*/

// 21
/*
let X = getRandomNumber(-5, 5)
let Y = getRandomNumber(-5, 5)
console.log(`X = ${X}, Y = ${Y}`)
if ((X == 0) && (Y == 0)) {
  console.log(0)
}
else if ((X == 0) && ((Y > 0) || (Y < 0))) {
  console.log(2)
}
else if ((Y == 0) && ((X > 0) || (X < 0))) {
  console.log(1)
}
else {
  console.log(3)
}
*/

//22
/*
let X = getRandomNumber(-5, 5)
let Y = getRandomNumber(-5, 5)
console.log(`X = ${X}, Y = ${Y}`)
if ((X > 0) && (Y > 0)) {
  console.log('I чверть')
}
else if ((X < 0) && (Y > 0)) {
  console.log('II чверть')
}
else if ((X < 0) && (Y < 0)) {
  console.log('III чверть')
}
else if ((X > 0) && (Y < 0)) {
  console.log('IV чверть')
}
else {
  console.log('Точка не лежить у жодній із чвертей')
}
*/

// 23
/*
let X4, Y4
let X1 = +prompt('Введіть X1: ')
let Y1 = +prompt('Введіть Y1: ')
let X2 = +prompt('Введіть X2: ')
let Y2 = +prompt('Введіть Y2: ')
let X3 = +prompt('Введіть X3: ')
let Y3 = +prompt('Введіть Y3: ')


if (isNaN(X1) || isNaN(X2) || isNaN(X3) || isNaN(Y1) || isNaN(Y2) || isNaN(Y3)) {
  console.log('Координати введено не вірно!')
}
else {
  if (X2 == X3) {
    X4 = X1
  }
  if (X3 == X1) {
    X4 = X2
  }
  if (X1 == X2) {
    X4 = X3
  }

  if (Y2 == Y3) {
    Y4 = Y1
  }
  if (Y3 == Y1) {
    Y4 = Y2
  }
  if (Y1 == Y2) {
    Y4 = Y3
  }

  if (X4 && Y4){
    console.log(`X4 = ${X4}, Y4 = ${Y4}`)
  }
  else {
    console.log('Координати введено не вірно!')
  }
}
*/

// 24

// let x = +prompt('Введіть x: ')
// let f
// if (isNaN(x) || Number.isInteger(x)){
//   console.log('Дані введено не вірно!')
// }
// else {
//   if(x>0){
//     f = 2 * Math.sin(x)
//   }
//   else {
//     f = 6 - x
//   }

//   console.log(`f(x) = ${f}`)
// }


// 25

// let x = +prompt('Введіть x: ')
// let f

// if(isNaN(x) || !(Number.isInteger(x))) {
//   console.log('Дані введено не вірно!')
// }
// else {
//   if(x < -2 || x > 2){
//     f = 2 * x
//   }
//   else {
//     f = -3 * x
//   }

//   console.log(`f(x) = ${f}`)
// }

// 26

// let x = +prompt('Введіть x: ')
// let f
// if (isNaN(x) || Number.isInteger(x)){
//   console.log('Дані введено не вірно!')
// }
// else {
//   if(x >= 2){
//     f = 4
//   }
//   else if (x <= 0) {
//     f = -x
//   }
//   else {
//     f = Math.pow(x, 2)
//   }

//   console.log(`f(x) = ${f}`)
// }

// 27

// let x = +prompt('Введіть x: ')
// let f, newX

// if (isNaN(x) || Number.isInteger(x) && (x != 0)){
//   console.log('Дані введено не вірно!')
// }
// else {
//   newX = Math.floor(x)
//   if(x < 0){
//     f = 0
//   }
//   else if (newX%2 == 0 || newX == 0) {
//     f = 1
//   }
//   else {
//     f = -1
//   }

//   console.log(`f(x) = ${f}`)
// }

// 28

// let nYear = +prompt('Введіть номер року: ')
// let days

// if (isNaN(nYear) || !(Number.isInteger(nYear)) || nYear <= 0){
//   console.log('Дані введено не вірно!')
// }
// else {
//   if ((nYear % 4 == 0) && !((nYear % 100 == 0) && (nYear % 400 != 0))){
//     days = 366
//   }
//   else {
//     days = 365
//   }

//   console.log(`У році днів: ${days}`)
// }