const name = "Subhashis";
const mname = "Triyashi";

// console.log(name+mname+" value");

console.log(`Hello my name is ${name} and my life is ${mname}`);

const gameName = new String("Magma-tr");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const newString2 = gameName.slice(-8, 2);
// console.log(newString2);

const newStringOne = "   subhashis   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://subashis.com/subhashis%20triyashi";

console.log(url.replace('%20','+'));
 



