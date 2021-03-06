function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
  }

// урок 2
// Работа с переменными

// 1. Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
// let num = 3
// alert(num)

// 2. Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// let a = 10, b = 2
// alert(`Сумма ${a + b}, разность ${a - b}, произведение ${a * b}, частное ${a / b}`)

// 3. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
// let c = 15, d = 2
// let result = c + d
// alert(result)

// 4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
// let a = 10, b = 2, c = 5
// alert(a + b + c)

// 5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
// let a, b, c, d, result
// a = 17
// b = 10
// c = a - b
// d = 7
// result = c + d
// alert(result)

// Работа со строками

// 6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
// let str = 'Привет, Мир!'
// alert(str)

// 7. Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
// let str1 = 'Привет, ' 
// let str2 = 'Мир!'
// alert(str1 + str2)

// 8. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
// let name = 'Maryna'
// alert(`Hello, ${name}!`)

// 9. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
// let age = 23
// alert('Мне ' + age + ' лет!')

// Функция prompt

// 10. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// let name = prompt('Как Вас зовут?')
// alert('Ваше имя ' + name)

// 11. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
// let num = prompt(`Введите число`)
// alert('Квадрат вашего числа: ' + Math.pow(num, 2))

// Обращение к символам строки

// 12. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
// let str = 'abcde';
// alert(`${str[0]}, ${str[2]}, ${str[4]}`)

// 13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
// let num ='12345'
// let pr = 1
// for (i = 0; i < num.length; i ++) {
//     pr *= num[i]
// }
// alert(pr)

// Практика

// 14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
// let hour, day, month
// hour = 60 * 60
// day = hour * 24
// month = day * 30
// alert (`в часе ${hour}сек, в сутках ${day}сек, в месяце ${month}сек`)

// 15. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
// let data = new Date();
// let hour = data.getHours();
// let minute = data.getMinutes();
// let second = data.getSeconds();
// alert(`${hour}:${minute}:${second}`)

// 16. Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
// let x = 13
// alert(Math.pow(x, 2))

// 17. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.
/*var num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);*/

// let num = 47
// num += 7
// num -=18
// num *= 10
// num /= 15
// alert(num)

// 18. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.
/*
var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);
*/

// let num = 10
// num ++
// num ++
// num --
// alert(num)

// Урок3
// Работа с массивами

// 1. Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
// let arr = ['a', 'b', 'c']
// alert(arr)

// 2. С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
// alert(`${arr[0]}, ${arr[1]}, ${arr[2]}`)

// 3. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// let arr = ['a', 'b', 'c', 'd'] 
// alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[1])

// 4. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let a, b, result
// let arr = [2, 5, 3, 9]
// a = arr[0] * arr [1]
// b= arr[2] * arr [3]
// result = a + b
// alert(result)

// Объекты (ассоциативные массивы)

// 5. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
/*var obj = {a: 1, b: 2, c: 3};*/
// let obj = {a: 1, b: 2, c: 3}
// alert(`${obj['c']}, ${obj.c}`)

// 6. Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
/*obj = {Коля: '1000', Вася: '500', Петя: '200'};*/
// let obj = {Коля: '1000', Вася: '500', Петя: '200'}
// alert(`${obj['Петя']}, ${obj['Коля']}`) 

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let obj = {0: 'Нд', 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб'}
// let data = new Date()
// let result = data.getDay()
// alert(obj[result])

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
//  Выведите день недели, соответствующий значению переменной day.
// let day = 3
// let obj = {1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Нд'};
// alert(obj[day])

// Многомерные массивы

// 9. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
// let arr = [[1, 2, 3], [4, 5, 6], [7,8,9]]
// alert(arr[1][0])

// 10. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// alert(obj.js[0])

// 11. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. 
// Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. 
// Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).
// let days = {
//     'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// alert(`${days.ru[0]}, ${days.en[2]}`)

// 12. Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
// let lang = 'ru'
// let day = 3
// let days = {
//     'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// alert(days[lang][day-1])

// Урок 4
// Работа с if-else

// 1.Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a
// a = 0
// // a = 1
// // a = -3
// if (a == 0){
//     alert('Верно')
// } 
// else {
//     alert('Неверно')
// }

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a
// a = 0
// a = 1
// a = -3
// if (a > 0){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a
// a = 0
// a = 1
// a = -3
// if (a < 0){
//    alert('Верно')
// } else {
//   alert('Неверно')
// }

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a
// a = 0
// a = 1
// a = -3
// if (a >= 0){
//    alert('Верно')
// } else {
//    alert('Неверно')
// }

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a
// a = 0
// a = 1
// a = -3
// if (a <= 0){
//   alert('Верно')
// } else {
//   alert('Неверно')
// }

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a
// a = 0
// a = 1
// a = -3
// if (a != 0){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// let a
// a = 'test'
// a = 'тест'
// a = 3
// if (a === 'test'){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
// let a
// a = '1'
// a = 1
// a = 3
// if (a === 1){
//    alert('Верно')
// } else {
//     alert('Неверно')
// }

// Работа с логическими переменными

// 9. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
// let test 
// test = false
// test = true
// if (test == true){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// if (test == true) alert('Верно'); else alert('Неверно')

// 10. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
//  Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
// let test 
// test = false
// test = true
// if (test !== true){
//    alert('Верно')
// } else {
//     alert('Неверно')
// }

// if (test != true) alert('Верно'); else alert('Неверно')

// Работа с && (и) и || (или)

// 11. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a
// a = 5
// a = 0
// a = -3
// a = 2
// if (a > 0 && a < 5){
//    alert('Верно')
// } else {
//    alert('Неверно')
// }

// 12. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. 
// Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a
// a = 5
// a = 0
// a = -3
// a = 2
// if (a == 0 || a == 2){
//    alert(a + 7)
// } else {
//    alert(a / 10)
// }

// 13. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// let a, b
// a = 3
// b = 5
// a = 1
// b = 3
// a = 0
// b = 6
// if ((a == 1 || a < 1) && (b >= 3)){
//     alert(a + b)
// } else {
//     alert(a - b)
// }

// 14. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 1
// let b = 5
// if ((a > 2 && a < 11) || ((b >= 6) && b < 14)){
//     alert('Верно')
// } else {
//     alert('Неверно')
// }

// 15. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// let num = 2
// let result 
// switch (num) {
//   case 1:
//   result = 'зима';
//    break;
//   case 2: 
//     result = 'весна';
//   break;
//   case 3: 
//     result = 'лето';
//   break;
//     case 4: 
//     result = 'осень';
//   break;
// }
// alert(result)

// Задачи

// 16. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = getRandomNumber(1, 31)
// if (day >= 1 && day <= 10) {
// 	alert('В первую, день = ' + day);
// }
// else if (day >= 11 && day <= 20) {
// 	alert('Во вторую, день = ' + day);
// }
// else if (day >= 21 && day <= 31) {
// 	alert('В третью, день = ' + day);
// }

// 17. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// let month = getRandomNumber(1, 12)
// if(month == 12 || month == 1 || month == 2) {
// 	alert('Зима ' + month);
// }
// if (month >= 3 && month <= 5) {
// 	alert('Весна ' + month);
// }
// if (month >= 6 && month <= 8) {
// 	alert('Лето ' + month);
// }
// if (month >= 9 && month < 12) {
// 	alert('Осень ' + month);
// }

// 18. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let x = 'abcde'
// if(x[0] == 'a'){
//    alert('да')
// } else {
//     alert('нет')
// }

// 19. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let x = '12345'
// if(x[0]==1 || x[0]==2 || x[0]==3){
//    alert('да')
// } else {
//     alert('нет')
// }

//20 Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// let str = '123'
// let i = 0
// let res = 0
// while(i<str.length){
//     res += +str[i]
//     i++
// }
// alert(res)

// 21. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = '222111'
// let i = 0, res1 = 0, res2 = 0
// while(i<3){
//     res1 += +str[i]
//     i++
// }
// i = 3
// while(i<6){
//     res2 += +str[i]
//     i++
// }
// if (res1 == res2){
//     alert('да')
// }
// else{
//     alert('нет')
// }

// Урок 5
// Циклы while и for

// 1. Выведите столбец чисел от 1 до 100.
// let i = 0
// while (i < 100) {
// 	console.log(i+1)
// 	i++
// }

// 2. Выведите столбец чисел от 11 до 33.
// let i = 11
// while (i<=33 ) {
// 	console.log(i)
// 	i++
// }

// 3  Выведите столбец четных чисел в промежутке от 0 до 100.
// for (i = 0; i < 100; i++) {
//     if (i%2 == 0 && i != 0) {
//         console.log(i)
//     }
// i++
// }

// 4. С помощью цикла найдите сумму чисел от 1 до 100.
// let sum = 0
// for (i = 1; i <= 100; i++) {
//  sum +=i  
// }
// console.log(sum)

// Работа с for для массивов

// 5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5]
// for (i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// 6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr= [1, 2, 3, 4, 5]
// let res = 0
// for(i=0; i<arr.length; i++){
//     res += arr[i]
// }
// console.log(res)

// Работа с for-in

// 7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
/* var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'} */
// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (key in obj) {
// 	console.log(key, obj[key])
// }

// 8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
// var obj = {Коля: 200, Вася: 300, Петя: 400}
// for (key in obj) {
// 	console.log(`${key} - зарплата ${obj[key]}`);
// }

// Задачи

// 9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10
// let arr = [2, 5, 9, 15, 0, 4]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }

// 10. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = []
// let i = 0, sum = 0
// while (i<10){
//     arr[i] = getRandomNumber(-100, 100)
//     if(arr[i]>0){
//         sum += arr[i]
//     }
//     i++
// }
// console.log(arr, sum)

// 11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 4){
//         console.log('Есть!')
//         break
//     }
// }

// 12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let str
// let arr = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < arr.length; i++){
//     str = arr[i] + ""
//     if(str[0] === '1'|| str[0] === '2'|| str[0] === '5'){
//         console.log(arr[i])
//     }
// }

// 13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let str = '-'
// for(let i = 0; i < arr.length; i++){
//     str = str + arr[i] + '-' 
// }
// console.log(str)

// 14. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// for(let i = 0; i < days.length; i++){
//     if(i == 5 || i == 6){
//         document.write('<strong>'+ days[i] + '</strong> ')
//     }
//     else{
//         document.write(days[i]+' ')
//     }
// }

// 15. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
// let days = [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
// let data = new Date()
// let day = data.getDay()
// for(let i = 0; i < days.length; i++){
//     if(i == day){
//         document.write('<strong>'+ days[i] + '</strong> ')
//     }
//     else{
//         document.write(days[i]+' ')
//     }
// }

// 16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000
// let num = 0
// while (n > 50) {
//     n = n / 2
//     num++
// }
// console.log(n, num)

// Урок 6

// 1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
// let a = 10
// let b = 3
// alert(a % b)

// 2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// let a = 10, b = 3
// let rest = a % b
// if (rest != 0) {
// 	alert('Делится с остатком ' + rest)
// } else {
// 	alert('Делится, результат деления: ' + (a / b))
// }

// Работа со степенью и корнем

// 3. Возведите 2 в 10 степень. Результат запишите в переменную st.
// let st = Math.pow(2, 10);
// console.log(st)

// 4. Найдите квадратный корень из 245.
// let x = Math.sqrt(245)
// console.log(x)

// 5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let sum = 0;
// let arr = [ 4, 2, 5, 19, 13, 0, 10]
// for( let i= 0; i < arr.length; i++ ) {
//     sum  +=  Math.pow(arr[i], 3)
// }
// let res = Math.sqrt(sum)
// console.log(res)

// Работа с функциями округления

// 6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let x = Math.sqrt(379)
// console.log(Math.round(x), +x.toFixed(1), +x.toFixed(2))

//7 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// let x = 587
// let res = Math.sqrt(x)
// let finalRes = {
//     'floor': Math.floor(res),
//     'ceil': Math.ceil(res)
// }
// console.log(finalRes)

// Нахождение максимального и минимального числа

// 8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let i = Math.max(4, -2, 5, 19, -130, 0, 10); 
// let j = Math.min (4, -2, 5, 19, -130, 0, 10)
// console.log(i, j)

// Работа с рандомом

// 9. Выведите на экран случайное целое число от 1 до 100.
// let n = getRandomNumber(1, 100)
// console.log(n)

// 10. Заполните массив 10-ю случайными целыми числами.
// let arr = [];
// for (i = 0; i < 10; i++) {
// 	arr[i] = getRandomNumber(1, 100)
// }
// console.log(arr)

// Работа с модулем

// 11. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a = getRandomNumber(-100, 100)
// let b = getRandomNumber(-100, 100)
// let res = a - b
// console.log(a, b, Math.abs(res))

// 12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
// let a = getRandomNumber(-100, 100)
// let b = getRandomNumber(-100, 100)
// let c = Math.abs(a-b)
// console.log(a, b, c)

// Задачи

// 13. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// let sum = 0
// let arr = [12, 15, 20, 25, 59, 79]
// for (i = 0; i < arr.length; i++) {
//     	sum += arr[i]
//     }
// let res = sum / arr.length
// console.log(res)
    
// 14 Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
// let n = 4
// let res = 1
// for( i =1; i<=n ; i++){
//     res *= i
// }
// console.log(n, res)

// Урок 7

// 1. Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str = 'js'
// console.log(str.toUpperCase())

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.
// let str = 'JS'
// console.log(str.toLowerCase())

// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
// let str = 'я учу javascript!'
// console.log(str.length)

// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами
// let str = 'я учу javascript!'
// console.log(str.substr(0, 1));
// console.log(str.substring(0, 1))
// console.log(str.slice(0, 2))

// 5 Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
// let str = 'я учу javascript!'
// console.log(str.indexOf('учу'))

// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
// let str = 'tethtrhth'
// let n = 5
// let res
// if(str.length > n){
//     res = str.substring(0, n)
//     console.log(res + '...')
// } else {
//     res = str
//     console.log(res)
// }

// Работа с replace

// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
// let str = 'Я-учу-javascript!'
// console.log(str.replace(/-/g, '!'))

// Работа с split

// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
// let str = 'я учу javascript!'
// let arr = str.split(" ")
// console.log(arr)


// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// let str = 'я учу javascript!'
// let arr = str.split("")
// console.log(arr)

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
// let date = '2025-12-31'
// let arr = date.split("-")
// let i = arr[2] + '.' + arr[1] + '.' + arr[0]
// console.log(i)

// Работа с join

// 11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
// let arr = ['я', 'учу', 'javascript', '!']
// let str = arr.join('-');
// console.log(str)

// Задачи

// 12. Преобразуйте первую букву строки в верхний регистр.
// let str = 'text'
// let arr = str.split("")
// console.log(arr[0].toUpperCase())

// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.
// let str = 'я учу javascript!'
// let arr = str.split(" ")
// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].split("")
//     arr[i][0] = arr[i][0].toUpperCase()
//     arr[i] = arr[i].join('')
// }

// console.log(arr.join(' '))

// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
// let str = 'var_test_text'
// str = str.replace(/_/g, ' ')
// let arr = str.split(" ")
// for (let i = 1; i < arr.length; i++){
//     arr[i] = arr[i].split("")
//     arr[i][0] = arr[i][0].toUpperCase()
//     arr[i] = arr[i].join('')
// }
// console.log(arr.join(''))

// Урок8

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let result = arr1.concat(arr2)
// console.log(result)

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr1 = [1, 2, 3]
// let result = arr1.reverse()
// console.log(result)

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr1 = [1, 2, 3]
// arr1.push('4', '5', '6')
// console.log(arr1)

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr1 = [1, 2, 3]
// arr1.unshift('4', '5', '6')
// console.log(arr1)

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// let elem = arr.shift()
// console.log(elem)

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq']
// let del = arr.pop()
// console.log(del)

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5]
// let del = arr.splice(0, 3)
// console.log(del)

// 8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
// let del = arr.splice(3, 4)
// console.log(del)

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr)

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5]
// let del = arr.splice(1, 3)
// console.log(del)

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a','b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)

// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7]
// console.log(arr.sort())

// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let obj = {js:'test', jq: 'hello', css: 'world'}
// let arr = Object.keys(obj)
// console.log(arr)

// Урок 9

// 1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
// let str = 'text'
// str = str[0].toUpperCase() + str.substr(1)
// console.log(str)

// let str = 'text'
// str = str.split('')
// str[0] = str[0].toUpperCase()
// let res = str.join('')
// console.log(res)

// 2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 
// let str = '123456'
// res = str.split('').reverse().join('')
// console.log(res)

// 3. Проверьте, что строка начинается на http://
// let str = 'http://site'
// if (str.substr(0, 7) == 'http://') {
// 	console.log('Да')
// } else {
// 	console.log('Нет')
// }

// 4. Проверьте, что строка заканчивается на .html
// let str = 'index.html'
// if (str.substr(-5) == '.html') {
// 	console.log('Да')
// } else {
// 	console.log('Нет')
// }

// Урок 10

// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// let num = getRandomNumber(-50, 50)
// function numSquare(num) {
//     return Math.pow(num, 2)
// }
// console.log(num, numSquare(num))

// 2. Сделайте функцию, которая возвращает сумму двух чисел.
// function numSum(num1, num2) {
//     return num1 + num2
// }
// console.log(numSum(2, 2))

// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function Matem(num1, num2, num3) {
//     return (num1 - num2) / num3
// }
// console.log(Matem(3, 2, 1))

// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// function dayWeeks(num){
//  let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
//  return arr[num-1]
// }
// console.log(dayWeeks(7))

// Урок 11

// 1. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = [1, 2, 3, 4, 5]
// let flag = false
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 5) {
// 		flag = true
//         break
// 	}
// }
// (flag == true) ? console.log('да') : console.log('нет')

// 2. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// let num = 49
// let flag
// for(let i = 2; i < num; i++) {
//     if (num % i == 0){
//         flag = true 
//         break
//     }
//     else {
//         flag = false   
//     }
// }
// console.log(flag)

// 3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = [1, 2, 3, 3, 4, 5, 6]
// let flag = false
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == arr[i - 1]) {
// 		flag = true
// 		break
// 	}
// }
// console.log(flag)

// Урок 12

// 1. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// function func(a, b){
//     if(a==b) {
//         return true
//     } else {
//         return false
//     }
// }

// let a = 1, b = 2
// console.log(func(a, b))

// 2. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
// function numSum(a,b){
//     if((a + b) > 10) {
//         return true
//     } else{
//         return false
//     }
// }
// let a = 1, b = 10
// console.log(numSum(a, b))

// 3. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// function func(a){
//     if(a>=0){
//         return false
//     } else {
//         return true
//     }
// }
// let a = -1
// console.log(func(a))

// Урок 13
// 1. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
// let str = ''
// for (let i = 1; i < 10; i++) {
//    str += i  
// }
// console.log(str)

// 2. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let str = ''
// for ( i = 9; i >= 1; i--){
//     str += i
// }
// console.log(str)

// 3. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
// let str = ''
// for (let i = 1; i < 10; i++) {
//    str += i + '-' 
// }
// console.log('-' + str)

// 4. Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов
// let str = ''
// for (i = 0; i < 20; i++) {
// 	str = str + 'x'
// 	console.log(str)
// }

// 5. С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write(i)
//     }
//     document.write('<br>')
// }


// 6.  Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
// let str = ''
// for (i = 0; i < 5; i++) {
// 	str = str + 'xx'
// 	console.log(str )
// }

// Урок 14

// 1. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// let arr = []
// let str ='x'
// for (i = 0; i < 10; i++) {
//     arr.push(str);
//     str = str + 'x'
// }
// console.log(arr)

// 2. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// let arr = []
// for (let i = 1; i < 5; i++) {
//     let str = ""
//     for (let j = 0; j < i; j++) {
//         str += i
//     }
//     arr.push(str)
// }
// console.log(arr)

// 3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// function arrayFill(x, n) { 
// 	var arr = []
// 	for (var i = 0; i < n; i++) {
// 		arr.push(x)
// 	}
// 	return arr
// }
// console.log(arrayFill('x', 5))

// 4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// function funcArr(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     if (sum > 10) {
//         i++
//         return i
//     }
//   }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(funcArr(arr))

// 5. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let arr = [1, 2, 3, 4, 5]
// let res = []
// for (let i = arr.length - 1; i >= 0; i--) {
//   res.push(arr[i])
// }
// console.log(res)

// 6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [[1, 2, 3], [4, 5], [6]]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		sum += arr[i][j]
// 	}
// }
// console.log(sum)

// 7. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
//   		for (let k = 0; k < arr[i][j].length; k++) {
// 			sum += arr[i][j][k]
//    		}
// 	}
// }
// console.log(sum)




