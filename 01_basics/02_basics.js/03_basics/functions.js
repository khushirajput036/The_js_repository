function sayMyName(){
    console.log("k");
    console.log("h");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
}
sayMyName()

// function add(a=2,b=4){
//     console.log(a + b) 
// }

function add(a=2,b=4){
    // let result = a + b
    // return result 
    return a + b
    console.log("Khushi") // unreachable code
}
const result = add()
// console.log("Result",result)

function LoginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
// console.log(LoginUserMessage("khushi"))
// console.log(LoginUserMessage()) // undefined

function CalculateCartPrice(...num1){
    return num1
}

console.log(CalculateCartPrice(200, 400, 500))