/* Rest e Spread Operator */
/*const sum = (a, b, ...rest) => {
  console.log(a, b, rest);
}*/

//function sum(...args) {
//  return args.reduce((acc, value) => acc + value,0)
//}
/*const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
const arr2 = arr.concat([5, 6, 7]);
const arr2Spread = [...arr, 5, 6, 7];
console.log(arr2Spread);*/

/*function logArgs(...args) {
  console.log(args);
}*/
//Spread Operator pode ser usado em:
  //string, arrays, objetos e objetos iteraveis

/*const obj = {
  test: 123
};

const obj2 = {...obj}
obj2.test = 456;
console.log(obj);
console.log(obj2);
*/



//Arrow Functions
/*var createObj = () => ({ test: 123, nome: 'Iann'})
console.log(createObj());
*/
/*function clicou(){
  var h3 = document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar no botão!</b>";
  console.log(h3);
}

function redirecionar(){
  window.open("https://google.com/");
  //window.location.href = "https://google.com/";

}

function trocar(){
  document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
  //alert("trocar texto");
}

function voltar(){
  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  //alert("trocar texto");
}*/
/* FUNÇÕES */

/*function soma(n1, n2) {
  return n1+n2;
}*/
/*function validaIdade(idade){
  var validar;
  if(idade >=18){
    validar = true;
  }else{
   validar = false;
  }
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/* DATA */

/*var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/* Laços de Repetição */
/*var count;
for(count = 0; count <=5; count++) {
  alert(count);
}*/

/*var count = 0;
while(count < 5) {
  console.log(count);
  count++;
}*/



/* Condicional */
/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
  alert("maior de idade");
}else{
  alert("menor de idade");
}*/

//LISTA DE DICIONARIO
/*var frutas = [{nome: "maça", cor:"vermelho"}, {nome:"uva", cor:"Roxa"}];
console.log(frutas);*/


//DICIONARIO
/*var fruta = {nome: "maça", cor: "vermelho"}
console.log(fruta.nome);
alert(fruta.cor);*/

//LISTA
/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.length);
lista.pop();
console.log(lista)
console.log(lista.length);

console.log(lista.join(" / "))*/


/*var nome = "Iann Rodrigues";
var n1 = 5;
var n2 = 5;
var frase = "Japão é o melhor time do mundo";
console.log(n1 * n2);
console.log(nome);
console.log(frase.replace("Japão", "Brasil").toUpperCase());*/