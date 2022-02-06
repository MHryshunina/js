// Begin 6-12
function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

// 6
let V, S
let a = getRandomNumber(1, 100)
let b = getRandomNumber(1, 100)
let c = getRandomNumber(1, 100)

V = a * b * c
S = 2 * (a * b + b * c + a * c)

console.log(`6. Паралелограм зі сторонами: ${a}, ${b}, ${c}. Об'єм дорівнює = ${V}, площа = ${S}`)

// 7
const pi = 3.14
let L, sCircle
let R = getRandomNumber(1, 100)
L = Math.round(2 * pi * R)
sCircle = Math.round((pi * Math.pow(R, 2)), 2)
console.log(`7. Радіус = ${R}. Довжина кола = ${L}, площа = ${sCircle}`)

// 8
let num_1 = getRandomNumber(-100, 100)
let num_2 = getRandomNumber(-100, 100)
average = (num_1 + num_2) / 2
console.log(`8. Середнє арифметичне чисел ${num_1} і ${num_2} = ${average}`)

// 9
let averageGeometric
let num_3 = getRandomNumber(0, 100)
let num_4 = getRandomNumber(0, 100)
averageGeometric  =  Math.round(Math.pow((num_3 * num_4), 0.5))
console.log(`9. Середнє геометричне чисел ${num_3} і ${num_4} = ${averageGeometric}`)

// 10
let sum, difference, product, fractionKv
let num_5 = getRandomNumber(1, 100)
let num_6 = getRandomNumber(1, 100)
sum = num_5 + num_6
difference = num_5 - num_6
product = num_5 * num_6
fractionKv =  Math.round(Math.pow(num_5, 2) / Math.pow(num_6, 2))
console.log(`10. Сума ${sum}, різниця ${difference}, добуток ${product}, частка квадратів ${fractionKv} чисел ${num_5} та ${num_6}`)

// 11
let fractionMod
let num_7 = +prompt('Number 1 = ')
let num_8 = +prompt('Number 2 = ')
sum = num_7 + num_8
difference = num_7 - num_8
product = num_7 * num_8
fractionMod =  Math.abs(num_7) / Math.abs(num_8)
console.log(`11. Сума ${sum}, різниця ${difference}, добуток ${product}, частка квадратів ${fractionMod} чисел ${num_7} та ${num_8}`)

// 12
let aTriangle = getRandomNumber(1, 100)
let bTriangle = getRandomNumber(1, 100)
let cTriangle = Math.round(Math.pow((Math.pow(aTriangle,2) + Math.pow(bTriangle,2)), 0.5))
let P = Math.round(aTriangle + bTriangle + cTriangle)
console.log(`12. Катети трикутника ${aTriangle} та ${bTriangle}, гіпотенуза ${cTriangle}. Периметр трикутника ${P}`)
