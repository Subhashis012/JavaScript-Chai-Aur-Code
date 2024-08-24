// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log("chai is ready");
})();

( (name)=> {
    console.log(`chai is ready two ${name}`);
})('subhashis')




