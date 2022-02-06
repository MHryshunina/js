// For 12-22

// 12 

function truncated(num) {
  return Math.trunc(num * 1000) / 1000;
}

function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}

function getRandomNumberFloat(min, max) {
  return Math.random() * (max - min) + min
}

// let n = +prompt('Введіть ціле число: ')
// let x = 1.1
// let result

// if (isNaN(n) || !(Number.isInteger(n)) || n <= 0){
//   console.log('Дані введено не вірно!')
// }
// else {
//   result = x
//   for (let i = 1; i < n; i++) {

//     x += 0.1
//     result *= x 
//   }
//   result = truncated(result) 
//   console.log(`Результат (12): ${result}`)
// }

// 13
// let c = 1

// if (isNaN(n) || !(Number.isInteger(n)) || n <= 0){
//   console.log('Дані введено не вірно!')
// }
// else {
  
//   result = 0
//   for (let i = 1; i <= n; i++) {
//     x = (1+i*0.1)*c
//     result += x
//     c *= -1
//   }
 
//   console.log(`Результат (13): ${result}`)
// }

// 14
// result = 0

// if (isNaN(n) || !(Number.isInteger(n)) || n <= 0){
//   console.log('Дані введено не вірно!')
// }
// else {
//   for (let i = 1; i <= n; i++) {
//        result += 2*i-1
//      console.log(`${result}`)
//   }
// }

// 15
// змінні для 15-22
// let a = truncated(getRandomNumberFloat(-10, 10))
// let x = truncated(getRandomNumberFloat(-10, 10))
// let n = getRandomNumber(1, 10)
// let result = 1
// for (let i = 1; i <= n; i++) {
//   result *= a
// }
// result = truncated(result) 
// console.log(`a = ${a}, n = ${n}, результат = ${result}`)

// 16 відповідь ніколи не може бути цілою, бо а - дробове, тому я виводжу цілу частину отриманого результату
// console.log(`a = ${a}`)

// // for (let i = 1; i <= n; i++) {
// //   result = Math.trunc(Math.pow(a, i))
// //   console.log(`n = ${i}, результат = ${result}`)
// // }

// for (let i = 1; i <= n; i++) {
//   result = Math.pow(a, i)
//   // відповідь ніколи не виведеться, бо результат завжди буде дробовим числом
//   if (Number.isInteger(result)){
//     console.log(`n = ${i}, результат = ${result}`)
//   }
// }

// 17

// for (let i = 1; i <= n; i++) {
//   result += Math.pow(a, i)
// }
// result = truncated(result) 
// console.log(`a = ${a}, n = ${n}, результат = ${result}`)

// 18

// let c = 1
// result = 0
// for (let i = 0; i <= n; i++) {
//   x = Math.pow(a, i)*c
//   result += x
//   c *= -1
// }
// result = truncated(result) 
// console.log(`a = ${a}, n = ${n}, результат = ${result}`)

// 19

// result = 1
// for (let i = 1; i <= n; i++) {
//   result *= i
// }

// console.log(`n = ${n}, результат = ${result}`)

// 20

// result = 0
// let nFactorial = 1
// for (let i = 1; i <= n; i++) {
//   nFactorial *= i
//   result += nFactorial
// }

// console.log(`n = ${n}, результат = ${result}`)

// 21

// result = 1
// nFactorial = 1
// for (let i = 1; i <= n; i++) {
//   nFactorial *= i
//   result += 1/nFactorial
// }

// console.log(`n = ${n}, результат = ${result}`)

// 22

// result = 1
// nFactorial = 1
// for (let i = 1; i <= n; i++) {
//   nFactorial *= i
//   result += Math.pow(x, i)/nFactorial
// }

// console.log(`x = ${x}, n = ${n}, результат = ${result}`)

// While 16-26

// 16

// let S = 10
// let K = 1
// let P = truncated(getRandomNumberFloat(0, 50))
// let dodProbeg
// while (S <= 200) {
//   dodProbeg = S*P/100
//   S += dodProbeg
//   K ++
// }

// console.log(`P = ${P}, днів = ${K}, сумарний пробіг = ${S}`)

// 17

// змінна для задач 17-21

// let n = getRandomNumber(1, 10000)
// console.log(`${n}`)

// while (n >= 1) {
//   x = n % 10
//   console.log(`${x}`)
//   n = Math.trunc(n / 10)
// }

// 18

// let k = 0
// let sum = 0
// while (n >= 1) {
//   x = n % 10
//   sum += x
//   n = Math.trunc(n / 10)
//   k ++
// }

// console.log(`Сума = ${sum}, кількість цифр = ${k}`)

// 19 

// let number = 0
// while (n >= 1) {
//   x = n % 10
//   n = Math.trunc(n / 10)
//   number = number * 10 + x
// }

// console.log(`${number}`)

// 20

// let result
// while (n >= 1) {
//   x = n % 10
//   n = Math.trunc(n / 10)
//   console.log(x)
//   if (x==2){
//     result = true
//   }
// }
// if (result == true){
//   console.log("True")
// }
// else {
//   console.log("False")
// }

// 21

// let result
// while (n >= 1) {
//   x = n % 10
//   n = Math.trunc(n / 10)
//   console.log(x)
//   if (x%2 != 0){
//     result = true
//   }
// }
// if (result == true){
//   console.log("True")
// }
// else {
//   console.log("False")
// }

// 22

// let n = getRandomNumber(2, 100)
// console.log(`${n}`)

// let i = 2
// let result
// while (i < n) {
//   if(n%i == 0){
//     result = false
//   }
//   i++
// }
// result == false ? console.log("False") : console.log("True")

// 23

// let a = getRandomNumber(1, 100)
// let b = getRandomNumber(1, 100)
// console.log(`${a}, ${b}`)

// while (a && b) {
//   a>b ? a = a % b : b = b % a
// }

// console.log(a+b)

// 24-26

let n = getRandomNumber(2, 100)
console.log(`${n}`)
let result = false
let number = 2

let a = 1, b = 1
//24
// while (b <= 100) {
//   if (n == b) {
//     result = true
//   }

//   console.log(b)
//   let c = a + b
//   a = b
//   b = c
// }

// (result == true) ? console.log("True") : console.log("False") 
//25
// while (b <= 150) {
//   if(b>n){
//     number = b
//     break
//   }
//   // number = b

//   let c = a + b
//   a = b
//   b = c
// }

// console.log("Перше число Фібоначчі, що більше n =", number)

// 26

// let number1=a, number2=b
//   while (b <= 150) {
//     if(b>n){
//       number1 = a
//       number2 = b
//       break
//     }
//     else if (b==n){
//       number1 = a
//       number2 = a+b
//       break
//     }
    
//     let c = a + b
//     a = b
//     b = c
//   } 
//   console.log(number1, number2)

  



