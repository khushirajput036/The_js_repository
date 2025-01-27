let myHeros = ["hulk","spiderman"]

let heroPowers = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`"spider power ${this.spiderman}`)
    }
}


Object.prototype.khushi = function(){
    console.log("khushi is presenting all objects")
}

Array.prototype.Heykhushi= function(){
    console.log("hey khushi")
}

//Object.Heykhushi()
// myHeros.Heykhushi()

// inheritance

const User = {
     name : "khushi",
     email : "khushi@gmail.com"
}


const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__:TeachingSupport,

}

Teacher.__proto__ = User 

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "the JS course            "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    
    console.log(`True length is ${this.trim().length}`)
}
anotherUserName.trueLength()
"khushi".trueLength()
"iceTea".trueLength()