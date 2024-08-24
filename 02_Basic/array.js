// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Subhashis", "Triyashi"];

const myArr2 = new Array(0, 1, 2, 3, 4, 5);
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice,spice

// console.log("A ",myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ",myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ",myArr);
// console.log(myn2);

// ************* array 2nd part ****************

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman" , "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heroes = [...marvel_heros, ...dc_heros]

// console.log(all_new_heroes);

const another_arrray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_arrray.flat(Infinity)

// console.log(real_another_array)


console.log(Array.isArray("Subashis"))
console.log(Array.from("Subashis"))
console.log(Array.from({name: "Subashis"}))  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
