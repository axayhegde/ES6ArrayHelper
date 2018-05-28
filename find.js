const arr1 = [{name:'James',age:18}, {name:'Alice',age:20}, {name:'Arvind',age:24}, {name:'Amanda',age:32}]

var foundElement = arr1.find((x) => x.name == 'Alice');
console.log(foundElement);