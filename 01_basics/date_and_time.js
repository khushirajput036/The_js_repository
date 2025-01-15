// Dates 

let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())


//let myCreatedDate = new Date(2024,0,24)
//let myCreatedDate = new Date(2024,0,24, 5 , 3)
// let myCreatedDate = new Date("2024-01-06")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);


// `${newDate.getDate()} and the month is {newDate.getMonth()}`

newDate.toLocaleString('default',
    {
    weekday : "long",
    timeZone : "Asia/Kolkata",
});

console.log(newDate.toDateString())