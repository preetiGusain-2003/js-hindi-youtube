console.log("Array Basics");
//differant ways to declare an array
//const arr=[0,1,2,3,4];
//const arr2 = new Array(5); // creates an array with 5 empty slots
//const arr3 = Array.of(1, 2, 3, 4, 5); // creates an array with the given elements
//
 const arr2 = new Array(1, 2, 3, 4, 5); // creates an array with the given elements
//console.log(typeof arr); // object
//console.log(arr.length); // 5
console.log(arr2.slice(1,3)); // [ <2 empty items> ]
console.log(arr2.splice(1,3))// [ <3 empty items> ]
console.log(arr2.join());//convert the array(object )to string
console.log(arr2.includes(5))// check if the array includes a value give a value in bollean or true or false

let a =['apple', 'banana', 'orange'];
let b=['kiwi', 'mango', 'grape'];
 console.log(a.concat(b)); // ['apple', 'banana', 'orange', 'kiwi', 'mango', 'grape']
//console.log(a.push(b)); // 4 (new length of the array)
a.push(b); // adds the array b as a single element to the end of array a
console.log(a); // ['apple', 'banana', 'orange', ['kiwi', 'mango', 'grape']]
console.log(Array.isArray("preeti"));// false
console.log(Array.from("preeti"));// ['p', 'r', 'e', 'e', 't', 'i']
let x =100;
let y = 200;
let z =300;
console.log(Array.of(x, y, z)); // [100, 200, 300]