const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "subashis";
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "subashis";
//     console.log(this.username);
// }

const chai = () => {
    let username = "subashis";
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "subashis"})

console.log(addTwo(5, 6))

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{

// })