// //two type of data type premitive and non premitive

// //premitive

// //7 : string, Number , Boolean , Null , undefined , symbol , BigInt
//Refrence (Non Premitive Data type) : Array , Object , Function 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
console.log(typeof isLoggedIn)

const outsideTemp = null
console.log(typeof outsideTemp)

let userEmail;
console.log(typeof userEmail)

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(typeof id)

// //console.log(id === anotherid)


const bigNumber = 4567834567897655678n
console.log(typeof bigNumber)

const fruits = ["Apple","Mango","Orange"]
console.log(typeof fruits)


   let myObj = {
     Name : "khushi",
    age : 20,

}
console.log(typeof myObj)

const myFuction = function(){
   console.log("hello world")
}

console.log(typeof myFuction)

// //call by value 

//when variable pass from main to function called call by value
// //call by refrence  

// when the address of variable pass from main to function called call by refrence.