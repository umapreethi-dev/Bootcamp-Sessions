
// var,let and const
function myFun(){
    var num1 = 1;
    let num2 = 2;
    const num3 = 3;
    { 
        var num1 = 100;
        let num2 = 200;
        const num3 = 3000;  
        console.log("Inside block n1" + " " + num1 );// 100
        console.log("Inside block n2" + num2 ); // 200
        console.log("Inside block n3" + num3 ); // 3000
    }
    console.log("Inside block n1" + num1 ); // 100
    console.log("Inside block n2" + num2 ); // 2
    console.log("Inside block n3" + num3 ); // 3
}

myFun();

// Array destructuring 

let array = [10,20,30,40,50];

let num1, num2,num3;

// destructuring
[num1,num2,num3] = array;

console.log(num1, num2, num3);

// Object destructuring 

let employee = {
    name: "Umapreethi",
    age: 28,
    Designation: "Volunteer Web Developer",
    address: {
        city: 'Minnetonka',
        state: 'Minesota',
        country: 'India',
    },
};

// have to destructure employee

let {name, age, Designation} = employee;

console.log(`
Name: ${name}
Age: ${age}
Designation: ${Designation}`);

// Destructure a function

function displayData({firstName, lastName}) {
    return `Name:${firstName} ${lastName}`;
}

const person = {
    firstName: 'John',
    lastName: 'smith',
    age: 36,
}

console.log("FullName" + displayData(person));

// Extract the data using destructuring

let arr = [10,20,30,40,50];

const array1 = ([num1,num2]) => {
    return `Num1: ${num1}, Num2: ${num2}`;
}

console.log(array1(arr));

const array2 = ([num1,num2,num3,num4]) => {
    return `Num2: ${num2}, Num4: ${num4}`;
}
console.log(array2(arr));

// Object exercise

let children = {
    firstName: 'uma',
    lastName: 'Balagovindan',
    age: 28,
    children: 2,
    profession: 'FSD',
}
 const displayDetails = ({firstName,lastName,profession}) =>{
     return `fn: ${firstName} , lN: ${lastName}, prof: ${profession}`
 }

 console.log(displayDetails(children));

 // Spread Operator

 //1. Copying one array into another array
 // When we try to copy one array to another usually the reference will be copied. 
 // so, when you try to change the second array, it will be reflected in first array
 // to avaoid that we are using spread operator

 let arr1 = [1, 2, 3, 4];
 let arr2 = [...arr1];
 console.log(arr2);// [1,2,3,4]

 // 2. Inserting one array into another 

 let arr3 = [5,6,...arr1,8,9,10];
 console.log(arr3);

const user1 = {name: 'John', age:45};

const user2 = {name: 'mera', loc: "LA"};

const merged = {...user1, ...user2};
console.log(merged);

//3. Array to argument

// Rest parameter

function getSum(num1,num2,num3, ...numbers){
    let sum =  0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(getSum(10,20,30,40,50));


function getColor(color1,color2, ...restColors){
    console.log(`${color1}`);
    console.log(`${color2}`);
    console.log(restColors[1]);//blue
    console.log(restColors.length);//3
    console.log(restColors.indexOf("Red"));//-1
    console.log(restColors);//[yellow,blue,white] print the rest values as array
}
getColor("Black","green","yellow","blue","white");































