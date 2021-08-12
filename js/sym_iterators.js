//Symbols:
  //Maneira de gerar um id único

/**const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId == uniqueId2);//False

const obj = {
  [uniqueId]: 'Hello'
};
console.log(obj);

//Well know symbols;
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
*/
//const it = arr[Symbol.iterator]();
//Sem ES6
/*console.log("Sem ES6");
while (true){
  let {value, done} = it.next();
  if(done){
    break;
  }
  console.log(value);
}
*/
/*const str = 'Digital Innovation One';
//Com ES6
console.log("Com ES6");
for (let value of str){
  console.log(value);
}*/

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
  values: [1, 2, 3, 4],
  [Symbol.iterator](){
    let i = 0;

    return{
      next: () =>{
        i++;
        return{
          value: this.values[i-1],
          done: i > this.values.length
        };
      }
    };
  }
};


const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of obj){
  console.log(value);
}

const arr2 = [...obj];
console.log(arr2);