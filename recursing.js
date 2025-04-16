//problem 10
function factorial(a) {
    if (a === 0) {
        return 1
    } else {
        return a * factorial(a-1);
    }
};

console.log("Factorial of the number",factorial(20));


//arrowing function
const factoriall = (b) =>{
    if (b === 0) {
        return 1
    } else {
        return b * factorial(b-1);
    }
}

console.log("Factorial of the number",factoriall(10));
