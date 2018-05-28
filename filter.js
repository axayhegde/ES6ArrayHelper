const arr1 = [{name:'James',age:18}, {name:'Alice',age:20}, {name:'Arvind',age:24}, {name:'Amanda',age:32}]

let filteredNames = arr1.filter(x => x.age > 25 );
console.log(filteredNames);