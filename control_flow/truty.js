// const userEmail = "test@gmail"
const userEmail = []

if(userEmail){
    console.log("Email is present");
} else {
    console.log("Email is not present");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// true, "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null or undefined

let val1;
// val1 = 10 ?? 20
// val1 = undefined ?? 10
// val1 = null ?? 10
// val1 = null ?? 10 ?? 15

// console.log(val1);


// Terniary Operator

// condition? true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("greater than 80");
