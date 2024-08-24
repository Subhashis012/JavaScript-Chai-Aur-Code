// singleton
// Object.create()

// object literals 

const mySym = Symbol("key1");

const Jsuser = {
    name: "Subashis",
    "full name": "Subashis Triyashi",
    [mySym]: "key1",
    age: 18,
    location: "India",
    email: "test@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "subashis@google.com";
// Object.freeze(Jsuser);
Jsuser.email = "subashis2@google.com";
// console.log(Jsuser)

Jsuser.greeting = function() {
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}


// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());

// ************ object2 ************


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email: "test@google.com",
    fullname: {
        userfullname: {
            firstname: "Subashis",
            lastname: "Dhara"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email = "s2@gmail.com"
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



// *********************** Object Destructuring **********************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Subashis"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     name: "Subashis",
//     age: 18
// }


[
    {},
    {},
    {}
]