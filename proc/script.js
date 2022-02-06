// Proc 6-12

function truncated(num) {
  return Math.trunc(num * 1000) / 1000;
}

function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min)
}

function getRandomNumberFloat(min, max) {
  return Math.random() * (max - min) + min
}

// 6 

// function DugitCountSum(K, C, S) {
//   let n = K
//   while(K != 0){
//     S += K%10
//     C += 1
//     K = Math.trunc(K/10)
   
//   }
//   alert(`C = ${C}, S = ${S}, K = ${n}`)
// }

// let S = 0, C = 0, a
// for(let i = 0; i < 5; i++){
//   a = +prompt('Введіть число: ')
//   DugitCountSum(a, C, S)
// }

// 7
// let num
// let K = getRandomNumber(1, 100000)
function InvDigit(K){
  K = +(('' + K).split('').reverse().join(''))
  return K
}
// num = InvDigit(K)
// console.log(`Число = ${num}, реверс = ${K}`)

// 8

// let n
// function AddRightDigit(D, K) {
//   K = ('' + K).split('')
//   K.push(D)
//   K = K.join('')
//   return K
// }

// let K = getRandomNumber(0, 100)
// let D1 = getRandomNumber(0, 9)
// let D2 = getRandomNumber(0, 9)

// console.log(`Число = ${K}`)
// n = AddRightDigit(D1, K)
// console.log(n)
// console.log(AddRightDigit(D2, n))

// 9

// let n
// function AddRightDigit(D, K) {
//   K = ('' + K).split('')
//   K.unshift(D)
//   K = K.join('')
//   return K
// }

// let K = getRandomNumber(0, 100)
// let D1 = getRandomNumber(0, 9)
// let D2 = getRandomNumber(0, 9)

// console.log(`Число = ${K}`)
// n = AddRightDigit(D1, K)
// console.log(n)
// console.log(AddRightDigit(D2, n))

// 10
//змінні для 10-12
// let A, B, C, D, min, max
// let array = []
// A = truncated(getRandomNumberFloat(0, 100))
// B = truncated(getRandomNumberFloat(0, 100))
// C = truncated(getRandomNumberFloat(0, 100))
// D = truncated(getRandomNumberFloat(0, 100))
// A2 = truncated(getRandomNumberFloat(0, 100))
// B2 = truncated(getRandomNumberFloat(0, 100))
// C2 = truncated(getRandomNumberFloat(0, 100))

// function Swap(X, Y) {
//   temp = X
//   X = Y
//   Y = temp
//   return [X, Y]
// }

// console.log(A, B, C, D)
// array = Swap(A, B)
// A = array[0]
// B = array[1]
// array = Swap(C, D)
// C = array[0]
// D = array[1]
// array = Swap(B, C)
// B = array[0]
// C = array[1]
// console.log(A, B, C, D)

// 11

// function Minmax(X, Y){
//   if (X>Y){
//     temp = Y
//     Y = X
//     X = temp
//   }

//   return [X, Y]
// }

// console.log(A, B, C, D)
// array = Minmax(A, B)
// min = array[0]
// max = array[1]
// console.log(min, max)
// array = Minmax(C, D)
// min = array[0]
// max = array[1]
// console.log(min, max)
// array = Minmax(A, C)
// min = array[0]
// max = array[1]
// console.log(min, max)
// array = Minmax(B, D)
// min = array[0]
// max = array[1]
// console.log(min, max)

// 12

// function SortInc3(A, B, C){
//   if (A > B) {
//     temp = A
//     A = B
//     B = temp
//   }
//   if (A > C) {
//     temp = A
//     A = C
//     C = temp
//   }
//   if (B > C) {
//     temp = B
//     B = C
//     C = temp
//   }
//   return [A, B, C]
// }
// console.log(`Первый набор чисел: ${A}, ${B}, ${C}`)
// array = SortInc3(A, B, C)
// A = array[0]
// B = array[1]
// C = array[2]
// console.log(A, B, C)

// console.log(`Второй набор чисел: ${A2}, ${B2}, ${C2}`)
// array = SortInc3(A2, B2, C2)
// A2 = array[0]
// B2 = array[1]
// C2 = array[2]
// console.log(A2, B2, C2)

// Proc 24-34

// 24
// змінні для 24-34
let k = 0, res, i = 0
let array = []

// function Even(K) {
//   if(K%2==0){
//     return true
//   } else {
//     return false 
//   }
// }

// while (i<10){
//   array[i] = getRandomNumber(0, 100)
//   res = Even(array[i])
//   if (res == true) {
//     k++
//   }
//   i++
// }
// console.log(array)
// console.log(`Кількість парних чисел = ${k}`)

// 25

// function InSquare(K) {
//   return K==Math.pow(Math.trunc(Math.sqrt(K)),2)
// }

// while (i<10){
//     array[i] = getRandomNumber(1, 100)
//     res = InSquare(array[i])
//     if (res == true) {
//       k++
//     }
//     i++
//   }
// console.log(array)
// console.log(`Кількість чисел, що є квадратами = ${k}`)

// 26

// function InPower5(K) {
//   return K==Math.pow(Math.trunc(Math.pow(K, 1/5)), 5)
// }

// while (i<10){
//     array[i] = getRandomNumber(1, 100)
//     res = InPower5(array[i])
//     if (res == true) {
//       k++
//     }
//     i++
//   }
// console.log(array)
// console.log(`Кількість чисел, що є cтепенем числа 5 = ${k}`)

// 27

// function InPowerN(K, N) {
//   return K==Math.pow(Math.trunc(Math.pow(K, 1/N)), N)
// }
// n = getRandomNumber(2, 10)
// while (i<10){
//     array[i] = getRandomNumber(1, 100)
//     res = InPowerN(array[i], n)
//     if (res == true) {
//       k++
//     }
//     i++
//   }
// console.log(array)
// console.log(`Кількість чисел, що є cтепенем числа ${n} = ${k}`)

// 28

// function IsPrime(N) {
//   let i = 2
//   let res = true
//   while (i < N) {
//     if(N % i == 0){
//       res = false
//       break
//     }
//     i++
   
//   }
//   return res
// }

// while (i<10){
//     array[i] = getRandomNumber(2, 100)
//     res = IsPrime(array[i])
//     if (res == true) {
//       k++
//     }
//     i++
//   }
// console.log(array)
// console.log(`Кількість простих чисел = ${k}`)

// 29
let n = 0
function DigitCount(K) {
  K = ('' + K).split('')
  n = K.length
  
  return n
}

// while (i < 5) {
//   array[i] = getRandomNumber(1, 1000000)
//   res = DigitCount(array[i])
//   console.log(array[i], res)
//   i++
// }

// 30

function DigitN(K, N) {
  K = InvDigit(K)
  if (DigitCount(K)<N){
    return -1
  }
  else {
    K = ('' + K).split('')
    return +K[N-1]
  }
}

// i=1
// let N = 5
// while (i<=N){
//   let K = getRandomNumber(1, 100000)
//   console.log(K, i, DigitN(K, i))
//   i++
// }

// 31

// function IsPalindrome(K) {
//   K2 = InvDigit(K)
//   if (K==K2){
//     return true
//   }
//   else {
//     return false
//   }
// }

// i=1
// let N = 10
// while (i<=N){
//   let K = getRandomNumber(1, 100000)
//   console.log(K, IsPalindrome(K))
//   i++
// }

// 32

// function DegToRad(D) {
//   return D*pi/180
// }

// const pi = 3.14
// let D 
// while (i<10){
//   D = truncated(getRandomNumberFloat(0, 360))
//   console.log(D, truncated(DegToRad(D)))
//   i++
// }

// 33

// function RadToDeg(R) {
//   return 180*R/pi
// }

// const pi = 3.14
// let R 
// while (i<10){
//   R = truncated(getRandomNumberFloat(0, 2*pi))
//   console.log(R, truncated(RadToDeg(R)))
//   i++
// }

// 34

// function Fuct(N) {
//   result = 1
//   for (let i = 1; i <= N; i++) {
//     result *= i
//   }
//   return result
// }


// let N
// while (i<5){
//   N = getRandomNumber(1, 10)
//   console.log(N, Fuct(N))
//   i++
// }