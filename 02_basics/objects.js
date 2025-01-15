// singleton
// onject literal
// constructor
//Object.create


const symbol = Symbol('key1')

const JsUser = {
    name : "khushi",
    "fullName" : "khushi Singh",
    age : 20,
    [symbol] :"key1",
    Location:"Delhi",
    email : "khushi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[symbol]);


JsUser.email = "khushichatgpt@gmail.com"
//console.log(JsUser["email"])
// Object.freeze(JsUser);
JsUser.email = "khushi@microsoft@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`)
}
//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());


// const tinderUser = new Object() // singleton object
const tinderUser = {} // non single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userfullname : {
             firstname : "khushi",
             lastname : "singh"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname)

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}
const obj4 = {5 : "a", 6: "b"}
// const obj3 = {obj1,obj2}

// assign copy the value of all of the enumerable own properties from one or more source object to a target object .return
//  the target obect

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj1 === obj3)
const obj3 = {...obj1,...obj2}
console.log(obj3)

//

// const target = {a:1, b: 2}
// const source = {b:4, c: 5}
// const returnedTarget = Object.assign(target,source)
// console.log(target);
// console.log(returnedTarget === target)


const users = [
    {
    id : 1,
    email : "k@gmail.com"
    },
    {
    id : 1,
    email : "k@gmail.com"
    },
    {
        id : 1,
        email : "k@gmail.com"
    },
    {

    },
    {
        
    },
    {
        
    },
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.length)
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// object de-structure and JSON

const course = {
    courseName : "Javascript",
    price : "999",
    courseInstructor : "khushi"
}

//course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor);

// JSON javascript object notation
// {
//     "name" : "khushi",
//     "courseName" : "Javascript",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]