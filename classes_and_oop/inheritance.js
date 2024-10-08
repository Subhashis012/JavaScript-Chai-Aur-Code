class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);    
    }
}

const chai = new Teacher("subashis", "sub@123", "1234")

chai.addCourse()

const masalachai = new User("masalachai")

masalachai.logMe()