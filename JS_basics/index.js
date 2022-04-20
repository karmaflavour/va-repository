const moment = require("moment")

const { calc_fib } = require("./utils")
console.log("running index.js...")

let number = 6

let faculty = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * faculty(n - 1)
  }
}

console.log("Calculating Faculty of " + number + ":", faculty(number))

console.log("Calculating Fibonacci of " + number + ":", calc_fib(number))

console.log("Today's Date:", moment().format())

console.log("...finished index.js")
