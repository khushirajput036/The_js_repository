// The reduce() method in JavaScript is a powerful and versatile array method that allows you to iterate over an array and
//  accumulate a result based on the elements of that array. It is commonly used to perform complex transformations

const array1 =[1,2,3,4]

// const initialValue = 0
// const sumWithInitial = array1.reduce((accumulator,currentValue)=>{

//  console.log(` the acccumulator is ${accumulator}  and the current value is ${currentValue}`)
//  return accumulator + currentValue
// })
// console.log(sumWithInitial) // 10


const myTotal = array1.reduce((acc,currentValue)=> acc+currentValue,0 )
console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js course",
        price : 40000,
    },
    {
        itemName : "python course",
        price : 60000,
    },
    {
        itemName : "java course",
        price : 80000,
    },
    {
        itemName : "data-science course",
        price : 100000,
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price , 0)
console.log(priceToPay)