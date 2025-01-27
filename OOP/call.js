function setUserName(username){
    // complex DB Calls
    this.username = username
    console.log("called")
}

function createUserName(username,email,password){
    setUserName.call(this,username)
    this.email = email,
    this.password = password
}

const save = new createUserName("khushi","khushi@google.com","123")
console.log(save)