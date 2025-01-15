
// var c = 300;
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    //console.log("Inner = ",a)
}
// console.log(a);
// console.log(b);
// console.log(c);


// Nested scope

function one(){
    const username = "khushi"

    function two(){
        const website = "Google"
        // console.log(username)
    }
    //console.log(website)
    two()
}

one()

if(true){
    const username = "khushi"
    if (username === "khushi"){
        const website = "google"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5))

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));