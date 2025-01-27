// ES6

// class User{
//     constructor(username,email,password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encryptpassword(){
//         return `${this.password}@%^`
//     }

//     chnageUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const code = new User("khushi","khushi@google.com","123")
// console.log(code.encryptpassword())
// console.log(code.chnageUserName())

// behind the scene

function User(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
}

User.prototype.encryptpassword = function(){
    return `${this.password}@%^`
}

User.prototype.username = function(){
    return `${this.username.toUpperCase()}`
}

const coding = new User("vish","vish@google.com","123")
console.log(coding.encryptpassword())
console.log(coding.username)
