// array

const myArr = [0, 1, 2, 3, 4, 5]
const Heroes = ['shaktiman', 'ford']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[3])

// array copy operation create shallow copy

// A shallow copy of an object is a copy whose properties share the same refrence  

// Deep copy 

// A Deep copy of an object is a copy whose properties do not  share the same refrence  

// Array Methods 

myArr.unshift(4)
myArr.shift()
myArr.push(6)
myArr.pop()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(4))


// join add all element of an array into a string seperated by the  specified seprator 

const newArr = myArr.join()

console.log(newArr);
console.log(myArr);

// slice splice 
// Returns the copy of a section of an array

// slice Extracts a portion of an array without modifying the original array.

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

//splice Removes or replaces existing elements and/or adds new elements to an array. This modifies the original array.

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Superman","flash","Spiderman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][2])


const dm_heros = marvel_heros.concat(dc_heros);
console.log(dm_heros);


// spread method

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

// flat returns a new array with all sub-array element comcatinated into it recursively into up the specified depth

const another_array = [1, 2, 3,[4, 5, 6 ], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Khushi"));
console.log(Array.from("khushi"))
console.log(Array.from({name:"khushi"}))
const obj = { name: "khushi" };

console.log(Object.entries(obj));
// object.entries to convert an object into an array of key value pairs not modify the original obj
console.log(obj)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))