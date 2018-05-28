const names = [{name:'James',age:18}, {name:'Alice',age:20}, {name:'Arvind',age:24}, {name:'Amanda',age:32}]

let mySome = names.some(name => name.name.length > 4);
console.log(mySome);