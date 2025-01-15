// if
//const isUserLoggedIn = True
//const tempreature = 41

// if(tempreature < 50){
//     console.log(`The tempreature is less than 50`)
// }
// else{
// console.log('Tempreature is greater than 50 ')
// }


// < , > , <=, >= , ==, ===, !=, !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`The user power is ${power}`)
// }
// console.log(`The user power is ${power}`)

// short hand notation

//implicit scope 

// const balance = 5000

// if (balance > 2000) console.log("true"), 
// console.log("true2")

// if(balance < 3000){
//     console.log("less than 3000")
// }
// else if(balance < 4000){
//     console.log("less than 4000")
// }else if(balance < 4500){
//     console.log("less than 4500")
// }
// else {
//     console.log("less than 6000")
// }

const userUserLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userUserLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("logged in")
}