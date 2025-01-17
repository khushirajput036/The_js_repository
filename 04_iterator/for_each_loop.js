// FOR EACH 

const coding = ["cpp","python","js","java","react"]

// coding.forEach( function(item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
console.log(item,index,arr)
})


const myCoding = [
    {
        language : "python",
        languageFileName:"py"
    },

    {
        language : "javascript",
        languageFileName:"js"
    },

    {
        language : "django",
        languageFileName:"dj"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language)
})