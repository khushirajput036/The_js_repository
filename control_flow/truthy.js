const Email = "k@khushi.ai";

if(Email){
    console.log("Got the user Email")
}
else{
    console.log("Don't have the user Email")
}

// 
const userEmail = [];

if(userEmail){
    console.log("Got the user Email")
}
else{
    console.log("Don't have the user Email")
}


//false value = false , 0, -0, BigInt, 0n, "", null, undefined, Nan

// true value = "0", "false", " ", [], {}, function(){},


if(userEmail === 0){
    console.log("Array is Empty")
}




const EmptyObj = {

}

if(Object.keys(EmptyObj).length === 0){
    console.log("Object is Empty")

}



// false == 0 // true
// false == '' // true
// 0 == '' // true

// Nullish coalescing operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 20 ?? 40
console.log(val1)


// ternary operator

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")