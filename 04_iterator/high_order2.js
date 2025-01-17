const myObject = {
    js:"javascript",
    cpp:"C++",
    rb :"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    console.log(`the key is ${key} and the value is ${myObject[key]}`)
}

const programming = ["js","python","laravel","Django","MySQL"]

for(const p in programming){
    console.log(programming[p])
}


// map is not iterable

// const map = new Map()
// map.set("IN" , "India")
// map.set("USA", "United state of America")
// map.set("Fr","France")

// for(const key in map){
//     console.log(key)
// }