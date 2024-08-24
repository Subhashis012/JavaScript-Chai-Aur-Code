class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const subhashis = new User('subhashis')
// console.log(subhashis.createId()) 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'test@google.com')
iphone.logMe()