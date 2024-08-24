class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password = value
    }
}

const hitesh = new User("hitesh@google.com", "1234")
console.log(hitesh.password)