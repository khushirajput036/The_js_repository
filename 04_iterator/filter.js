// for each loop don't return tha value

const coding = ["cpp","python","js","java","react"]

// const value = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(value) // undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


// const myNums1 = [1,2,3,4,5,6,7,8,9,10]

// const newNums1 = myNums.filter( (num) => num > 4)

// console.log(newNums1)

const books =[
    {title : 'BookOne', genre : 'finction', publish : 1981, edition: 2004},
    {title : 'BookTwo', genre : 'non-finction', publish : 1992, edition: 2008},
    {title : 'BookThree', genre : 'history', publish : 1999, edition: 2007},
    {title : 'BookFour', genre : 'finction', publish : 1989, edition: 2010},
    {title : 'BookFive', genre : 'science', publish : 1999, edition: 2009},
    {title : 'BookSix', genre : 'finction', publish : 1987, edition: 2010},
    {title : 'BookSeven', genre : 'history', publish : 1986, edition: 1996},
    {title : 'BookEight', genre : 'science', publish : 2011, edition: 2016},
    {title : 'BookNine', genre : 'finction', publish : 1981, edition: 1989},
];

const userBooks = books.filter((bk)=>{
    return bk.genre == 'history'
})
const userBooks1 = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre == 'history' 
})

console.log(userBooks1)
