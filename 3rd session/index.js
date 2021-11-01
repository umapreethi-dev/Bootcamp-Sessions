//Copy by value for primitive data types

var x = 10;
var y = 20;
x=y;
console.log(x,y);

//Copy by reference for non-primitive types
//Array
let arr = [10,20,30,40,50];
let arr1 = arr;
arr = arr1;
arr1[1] = 500;
console.log(arr,arr1);
/* Both arr, arr1 are occupying same location by changing the values in arr1, the values will be
be reflected in arr*/


//Object
let person = {
    name: 'John'
}

let newPerson = person;
newPerson.name = 'Doe';
console.log(person.name);
/* person and newPerson are occupying the same location */

//function
function sum(num1,num2){
    sum = num1 + num2;
    return sum;
}
console.log(sum(10,20));
function calculate(num1,num2){
    let calculateResult = {
        sum : num1 + num2,
        sub : num1 - num2,
        mul : num1 * num2,
        div : num1 / num2
    };
    return calculateResult;
}
let result = calculate(10,20);
console.log(result);


//task

var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];

  for (const per in obj){
      for (const per1 in obj){
      console.log(` ${obj[per][per1]}`)
      }
  }