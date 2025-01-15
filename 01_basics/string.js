const name = "khushi"
const repo = 10

console.log(`My name is ${name} and my repo is ${repo}`)

const gameName = new String('khushi-k-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('u'));
console.log(gameName.split('-'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6,4);
console.log(anotherString)





const newStringOne = "       khushi    " 
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://khushi.com/khushi%20Singh"
console.log(url.replace('%20', '-'));
console.log(url.includes('khushi'))