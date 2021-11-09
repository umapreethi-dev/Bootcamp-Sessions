const data = {
    name: 'uma',
    age: 28,
    city: 'Minnetonka',
    courses: {
    courseName: 'html,css',
    duration: '5months',
    rank: 1
    }
};

let displayData = (obj) =>{
    console.log(obj);
}

displayData(data);

// Updating the city value in the object
data.city = 'Hopkins';
console.log(data);// will update the variable since it is a object

// For const variable
const name1 = 'meera';
//name1='krishnan';
console.log(name1);// TypeError Assignment to constant variable


var name = 'uma';
var name = 'bala';
console.log(name);

let name2 = 'uma';
//let name2 = 'bala';
console.log(name2);// Error identifier 'name2' already declared 

// difference btwn var and let
let course = 'html';
if(course === 'html'){
    var dept1 = 'IT';
    let dept2 = 'CSE';
}

console.log(dept1);
//console.log(dept2);// Reference error: dept2 is not defined 

//Since var is function scope and let is block scope

let student = {
    firstName : 'John',
    lastName : 'Doe',

    fullName : () => {
        return `${student.firstName} ${student.lastName}`
    },
};

console.log(student.fullName());

// Ternary Operator for

Age = 65;
Age > 55 ? console.log("Senior Citizen") : console.log("Not a Senior Citizen")


//exercise
//Not adding coma at last

let res ="";
for(let i=0;i<=10;i++){
    if(i <=9){
        res += `${i},`;
       
    }else {
        res += `${i}`;
    }
}

console.log(res);// 0,1,2,3,4,5,6,7,8,9,10

// even numbers

let output = "";
for(let i=10; i>=0; i-=2){
    if(i>0){
        output += `${i},`;
    }else{
        output += `${i}`;
    }
}

console.log(output);

// exercise 

const user = {
    email: "l@guvi.in", 
    password: "12345",
};

const updateUser = ({email, password}) => {
    if(email) {
        Object.assign(user, {email});
    }
    if(password){
        user.password = password;
    }

    return user;
}

const updateUser1 = updateUser({email: "uma@gmail.com"});

console.log(updateUser1 == user);

//console.log(user);