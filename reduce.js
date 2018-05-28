const names = [{name:'James',age:18}, {name:'Alice',age:20}, {name:'Arvind',age:24}, {name:'Amanda',age:32}]

const numbers = [1,2,3,4,5]
let sum = 0;

let usingReducer = numbers.reduce((sum,numbers) => sum + numbers,0);
console.log(usingReducer);