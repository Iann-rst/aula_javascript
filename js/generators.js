/* Generators: */
/*
function* hello(){
  console.log("Hello");
  yield 1;

  console.log('From');
  const value = yield 2;

  console.log(value);
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/
const uniqueId = Symbol('Hello');
Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

/*const obj = {
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
};*/

/*  Usando Generator para construir Iterators */

//transformando um objeto em iterável
const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator](){
    for(var i = 0; i < this.values.length;i++){
      yield this.values[i];
    }
  }
};

for  (let value of obj){
  console.log(value);
}

