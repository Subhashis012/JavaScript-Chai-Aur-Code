// Dates

let myDate = new Date();
// console.log(myDate.toString()); // Sat Aug 03 2024 12:01:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Aug 03 2024
// console.log(myDate.toTimeString()); // 12:01:59 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); // 8/3/2024, 12:01:59 PM
// console.log(myDate.toLocaleDateString()); // 8/3/2024
// console.log(typeof myDate); // object
 
// let myCreateDate = new Date(2023,0,23)
// console.log(myCreateDate.toDateString())
// let myCreateDate = new Date(2023,0,23,5,3)
// console.log(myCreateDate.toLocaleString());
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
}) 