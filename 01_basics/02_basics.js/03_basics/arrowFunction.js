const user = {
    username : "khushi",
    price : 999,

    welcomeMessage: function(){
       // console.log(`${this.username}, welcome to website`);
        //console.log(this);

    }
}

user.welcomeMessage()
user.username = "name";
user.welcomeMessage()

// console.log(this)

// in browser this global object is a window object

// function code(){
//     let username = "khushi"
//     console.log(this.username)
// }
// code()

// function code(){
//     let username = "khushi"
//     console.log(this.username)
//     }
// code()


// const code1 = function(){
//     let username = "khushi"
//     console.log(this.username)
// }

// code1()

// const code1 = () => {
//     let username = "khushi"
//     console.log(this)
// }

// code1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3)) //Nan

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({name : "khushi"}) // object return

console.log(addTwo(2,5))

// const MyArray = []
// MyArray.forEach()