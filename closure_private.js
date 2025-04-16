// 7.problem Create a function named createCounter that has a private counter variable. This
// function should return an object with two methods: one (increment) to increase thecounter and another (getValue) to return the counter’s current value.


function createCounter() {
    var x = 1;
    function getValue() {
        var y = x+1;
        console.log("This is the increamented value",y  )
        return y;
    }return getValue
}

const finalinc = createCounter()
finalinc()
