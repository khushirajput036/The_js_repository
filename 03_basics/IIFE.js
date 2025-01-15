// IIFE = Immediately invoked Function Expression

// For remove the global scope pollution and immediately excute the code \

(function code(){
    // named IIFE
    console.log("DB Connected")
})();

(  (name) => {
    console.log(`DB Connected Two ${name}`)
})('khushi')