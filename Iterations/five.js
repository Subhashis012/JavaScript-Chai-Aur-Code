const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( function (ele) {
//     // console.log(ele);
// } )

// coding.forEach( (ele) => {
//     console.log(ele);
// })

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (ele, index, arr) => {
//     console.log(ele, index, arr)
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (ele) => {
    console.log(ele.languageName)
    console.log(ele.languageFileName)
} )