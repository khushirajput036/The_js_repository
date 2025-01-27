class User{
    constructor(username){
        this.username = username

    }
    logMe(){
        console.log(`${this.username}`)
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username),
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new couse was added by ${this.username}`)
    }

}

const tech = new Teacher("ved", "ved@google.com","123")
tech.addCourse()
const monacco = new User("monacco")
monacco.logMe()
console.log(tech === monacco)
console.log(tech instanceof User)