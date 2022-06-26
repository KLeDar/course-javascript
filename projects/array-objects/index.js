/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
    forEach([1, 2, 3], (el) => console.log(el))

    Из доки: Метод выполняет предоставленную функцию один раз для каждого элемента массива.
    const array1 = ['a', 'b', 'c'];
    array1.forEach(element => console.log(element));

 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
    map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]

    Из доки: Метод создает новый массив, заполненный результатами вызова предоставленной функции для каждого элемента в вызывающем массиве.
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map(x => x * 2);
    console.log(map1);

 */
function map(array, fn) {
  const new_array = [];
  for (let i = 0; i < array.length; i++) {
    new_array[i] = fn(array[i], i, array);
  }
  return new_array;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6

   Из доки: Метод выполняет предоставленную функцию обратного вызова для каждого элемента массива по порядку,
   передавая возвращаемое значение из вычисления для предыдущего элемента.
   Конечным результатом работы редуктора по всем элементам массива является одно значение.

   const array1 = [1, 2, 3, 4];

   // 0 + 1 + 2 + 3 + 4
   const initialValue = 0;
   const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue let prev = hasInitial ? 0 initial : array[0];
   );
 */
function reduce(array, fn, initial) {
  const hasInitial = typeof initial !== 'undefined';
  let prev = hasInitial ? initial : array[0];
  for (let i = hasInitial ? 0 : 1; i < array.length; i++) {
    prev = fn(prev, array[i], i, array);
  }
  return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const properties = [];
  for (const name in obj) {
    properties.push(name.toUpperCase());
  }
  return properties;
}

/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(obj, key, value) {
      obj[key] = value ** 2;
      return true;
    },
  });
}
export { forEach, map, reduce, upperProps, createProxy };
