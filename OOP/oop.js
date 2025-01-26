// Object literal

// const users = {
//     userName : "hitesh",
//     loginCount : 8,
//     signedIn : True,

//     getUserDetails :function(){
//             // console.log("Got user details from database")
//             // console.log(`userName : ${this.userName}`)
//             console.log(this)
//     }
// }

// console.log(users.userName)
// console.log(users.getUserDetails())


// 


function user(userName,loginCount,isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`'Welcome'${this.userName}`)
    }

    // return this
}

const userOne = new user("khushi",8,true)
const userTwo = new user("ayushi",18,false)
console.log(userOne.constructor)


// new keyword create a empty object 
// constructor function call through new keyword
// this keyword inject all arguments
// get the function

