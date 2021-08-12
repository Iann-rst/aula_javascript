/* Parte 2: Destructuring */

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
//Sem Destructuring Assignment
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
//console.log(tomato2);
/*-------------------------------------------------------*/
//Com Objetos Sem Destructuring Assignment
var obj = {
  nome: 'Iann',
  props: {
    age: 26,
    favoriteColors: ['black', 'blue']
  }
};

var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];
var color2 = obj.props.favoriteColors[1];
console.log('------Sem Destructuring Assignment------');
console.log(color1);
console.log(color2);
//Com Objetos usando Destructuring Assignment
var {nome} = obj;
var {nome: nome2} = obj;
var {props: {age: age2, favoriteColors: [color1, color2]}} = obj;

console.log('------Com Destructuring Assignment------');
console.log(nome2);//Iann
console.log(nome); //Iann
console.log(age);//26
console.log(age2);//26
console.log(color1);//black
console.log(color2);//blue

/* Com array de objetos */
var arr1 = [{name: 'Apple', type: 'fruit'}];

//Sem Destructuring Assignment
var fruit1 = arr1[0].name;

//Com Destructuring Assignment
var [{ name: fruitName}] = arr1;
console.log(fruitName);

//functions
function sum(arr){
  return arr[0] + arr[1];
}

function sum1([a, b] = []){
  return a + b;
}
console.log(sum([5, 5]));
console.log(sum1([5, 5]));