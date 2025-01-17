// for of

// ["","",""]

// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   console.log(num)
    
}

const greetings ="Hello World"
for (const greet of greetings) {
 console.log(greet)
}

 
//Map

const map = new Map()
map.set("IN" , "India")
map.set("USA", "United state of America")
map.set("Fr","France")
// map.set("Fr","France")// only unique value in map

console.log(map)
for(const [state, value] of map){
  console.log(state, ":-", value)
 }

//  const myObject = {
//      'game1' : 'NFS',
//     'game2' : 'Rockstar Games',
//  }
// for(const [game,value] of myObject){
//  console.log(game, ":-" ,value )
// }
