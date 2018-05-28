# Exploring Array Helper Methods JavaScript ES6
## forEach
forEach accept a function iterator that loop through each item in an array
```
   const arr = [91,46,33,87]
   arr.forEach(item => console.log(item))
```
so above code will print 91 46 33 87. You can also create a function and pass the reference into forEach, like this
```
   const items = (item) => { console.log(item) }
   arr.forEach(items)
```
## Map
Map will loop through each item of array, same like forEach but Map returns the value of the array.
```
   const arr = [{name:”James”,age:18}, {name:”Alice”,age:20}]
   const person_names = arr.map(person => person.name)
   console.log(person_names)
```
That will print
```
    [“James”,”Alice”]
```
Easy? One of the biggest advantage to use Map over a old-school for loop is that you don’t hold temporary variable. Let’s do a reverse example for above code using for loop.
```
    const arr = [{name:"James",age:18}, {name:"Alice",age:20}]
    let temp = []
    for(let i = 0; i < arr.length; i++){
        temp.push(arr[i].name)
    }
    console.log(temp)
```

## filter
forEach accept a function iterator that loop through each item in an array
```
   const arr = [91,46,33,87]
   arr.forEach(item => console.log(item))
```
so above code will print 91 46 33 87. You can also create a function and pass the reference into forEach, like this
```
   const items = (item) => { console.log(item) }
   arr.forEach(items)
```

## Filter
Filter return array based on the boolean of the comparison

```
   const fruits = [
    {name:”banana”,color:”yellow”},
    {name:”watermelon”,color:”red”},
    {name:”orange”,color:”orange”}
   ]
   const filteredFruits = fruits.filter(fruit => fruit.color === ‘yellow’);
   console.log(filteredFruits)
```
Above code will return [{name:”banana”,color:”yellow”}]. Filter is often use in filtering and sorting of a list.

## some
Some accept an iterator function that will return true or false
```
   const names = [“Alex”,”Jimmy”,”Johnny”]
   names.some(name => name.length > 4)
   console.log(names)
```
Above code will return true because the character length of Jimmy and Johnny has more than 4 characters. The iteration basically will return (true || false || true), thus the result is true.

## every
```
    const names = [“Alex”,”Jimmy”,”John”]
    names.every(name => name.length > 4)
    console.log(names)
```
Above code will return false because not every items has the character length 4. every is like some, but instead using OR operator it uses AND. What is the result of returning (false && true && true)? False.

## reduce
Reduce is the most flexible helper, we can probably reimplement all the other helpers by just using reduce. Since reduce is the most complicated one, let’s do a classic normal for loop first.

```
     const numbers = [1,2,3,4,5]
     let sum = 0
     for(let i=0;i<numbers.length;i++){
        sum += numbers[i]
     }
     console.log(sum)
```
The sum will print 15. Let’s do it in one line using reduce.
```
numbers.reduce((sum, numbers) => sum + numbers, 0)
```
Reduce takes two arguments, the first argument is the iterator function, which in above case sum is the accumulator and numbers is an array, the second argument is the initial value, for our case we want it to be zero.



