/* Parte 2: Destructuring */

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
//Sem Destructuring Assignment
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(tomato2);