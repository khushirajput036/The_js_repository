// Javascript excution context
// Global excution context
// function excution context
// Eval excution context

// Excute in 2 phase
// Memory Creation Phase // it allocate the memory
// Execution Phase 

let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let rest1 = addNum(val1,val2)
let rest2 = addNum(10,2)

// 1) Memory Phase

// Val1 = undefined 
// Val2 = undefined 
// addNum = defination
// rest1 = undefined
// rest2 = undefined 

// 2) Excution Phase 

// val1 = 10 
// val2 = 5 
// addNum = new varibale + excution thread - delete

 //Memory Phase 

 // val1 = undefined
 // val2 = undefined 
 // total = undefined

 // Execution context 

 // num1 = 10 
 // num2 = 5
 // total = 15

//  The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// 🔵Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// 🔵Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// 🔵Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// 📝The return value of the 'Function Execution' context is passed to the Global Execution Context