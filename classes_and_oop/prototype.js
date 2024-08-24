// let myName = "Subhashis     "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);  
    }
}

Object.prototype.subhashis = function(){
    console.log("subhashis is present in all the objects");
}

Array.prototype.heySubhashis = function(){
    console.log("hey subhashis");
}
// heroPower.subhashis()
// myHeros.subhashis()
// myHeros.heySubhashis()
// heroPower.heySubhashis()

// inheritance

const User = {
    name:'chai',
    email: 'chai@123'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()