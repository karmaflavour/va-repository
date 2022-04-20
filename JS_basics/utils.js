console.log("running utils.js...")

const calc_fib = (n) => {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return calc_fib(n - 1) + calc_fib(n - 2)
  }
}

console.log("...finished utils.js")
module.exports = { calc_fib }