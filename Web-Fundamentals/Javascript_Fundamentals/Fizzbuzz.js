// writing code 1-100, print Fizz for multiples of 3, Buzz for x5, FizzBuzz for both

for(let i=1; i<=100; i++) {
    if (i%15 == 0) {
        console.log("FizzBuzz")
    }
    else if (i%3 == 0) {
        console.log("Fizz")
    }
    else if (i%5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}