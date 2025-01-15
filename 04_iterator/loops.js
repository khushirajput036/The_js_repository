// for

for(let index = 0; index <= 10; index++){
    const element = index;
    if(element == 6){
        //console.log("5 is best no")
    }
    //console.log(element)
}

// for(i=0;i<10;i++){
//     console.log(i)
// }

for(i=0;i<=10;i++){
    //console.log(`The outer loop : ${i}`)
    for(j=0;j<=10;j++){
       // console.log(`The outer loop : ${j} and the inner loop is ${i}`)
       //console.log(i, "*", j ,"=",   i*j )
    }    
}

// const MyArray = ["flash", "batman","superman"]
// console.log(MyArray.length)
// for(k=0;k < MyArray.length;k++){
//     const ele = MyArray[k]
//     console.log(ele)
// }

for(n = 1; n<= 20; n++){
    if(n == 5){
        console.log(`The best no is ${5}`)
        continue
    }
    console.log(`The value of n is ${n}`)
}