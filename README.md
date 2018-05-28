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
