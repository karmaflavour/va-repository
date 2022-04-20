console.log(`
##################################################
##################################################

########## Simple Datatypes ##########

##### Numbers #####
Integers and floats are wroking  thr same way as in other languages
But in JavaScript is only the type "number"
`)

let x = 37
console.log(`
let x = 37
console.log(x, typeof(x))
`)
console.log(x, typeof x)

console.log(`
let y = 34.7
console.log(typeof y)
`)
let y = 34.7
console.log(typeof y)

console.log(`
##### Booleans #####

let bool_true = true
console.log(typeof t)
`)
let bool_true = true
console.log(typeof bool_true)

console.log(`
##### Strings #####
let hello = "hello"
let world = "world"
`)
let hello = "hello"
let world = "world"

let arithmetische_operatoren = [
  { Symbol: "+", Operator: "Addition" },
  { Symbol: "-", Operator: "Substraktion" },
  { Symbol: "/", Operator: "Division" },
  { Symbol: "%", Operator: "Modulo-Operator" },
  { Symbol: "*", Operator: "Multiplikation" },
]

let vergleichs_operatoren = [
  { Symbol: "==", Operator: "Equality (but can be different type!)" },
  { Symbol: "===", Operator: "Equality (also equal type!" },
  { Symbol: "!=", Operator: "Inequality (NOT type sensitive)" },
  { Symbol: "!==", Operator: "Inequality (type sensitive)" },
  { Symbol: "<", Operator: "Less then" },
  { Symbol: ">", Operator: "Greater then" },
  { Symbol: "<=", Operator: "Less equals" },
  { Symbol: ">=", Operator: "Greater equals" },
]
let logische_operatoren = [
  { Symbol: "&&", Operator: "Logisches UND" },
  { Symbol: "||", Operator: "Logisches ODER" },
]

console.table(arithmetische_operatoren)
console.table(vergleichs_operatoren)
console.table(logische_operatoren)

console.log(`
console.log(...) can be used to print as in other programming languages
console.warn(...) can b used to print warning messages
console.error(...) can be used to print error messages
console.table(...) can be used to print objects or arrays in tabular form

If console.log(...) is used for logging to the browser-console, the ocntent of objects/arrays can still be explored by clicking on them
`)

console.log(`
##### Examples #####
`)

console.log(`
x             ${x}
x + 1         ${x + 1}
x - 1         ${x - 1}
x * 2         ${x * 2}
Math.sqrt(x)  ${Math.sqrt(x)}     (Squareroot)
y             ${y}
Math.floor(y) ${Math.floor(y)}    Floors the number
Math.ceil(y)  ${Math.ceil(y)}    Ceils the number
Math.round(y) ${Math.round(y)}    Rounds the number to the next integer

x += 13        ${(x += 13)}
y *= 3        ${(x *= 3)}

true && true    ${true && true}
true || false   ${true || false}
!true           ${!true}
5 == "5"        ${
  5 == "5"
}     Be aware, that two equal signs (==) dont check the type!
5 === "5"       ${5 === "5"}
true != true    ${true != true}

hello + " " + world   ${hello + " " + world}

hello.split("e")      ${hello.split(
  "e"
)} (array with two elements: ["h", "llo"])

world + 7             ${world + 7}

// .replaceAll only works with EcmaScript12+ (this means node 16+)
hello.replaceAll("l", "(bb)")  ${hello.replaceAll("l", "(bb)")}
`)

console.log(`
##################################################
##################################################

##### Arrays #####

Arrays are variable in size (you don't have to define its size beforehand) and multiple different datatypes can be element of an array.
`)

let arr = [4, 8, 0, -4, "hello", true, false, true, true, (x) => 2 * x]
let sorted = arr.sort((a, b) => a - b)

console.log(`
let arr = [4, 8, 0, -4, "hello", true, false, true, true, (x) => 2 * x]
// an array with types "number", "string", "boolean" and "function"

arr[3]                    ${arr[3]}
arr.sort((a,b) => a - b)  ${sorted}
// lambda-function in "sort" defines the sorting scheme

arr.push("another element")
// adds a new element at the end of the array
`)

arr.push("another element")

console.log(`
arr.pop()                 ${arr.pop()}
// Removes and returns the last element of the list

// arr.shift   --> similar to push, only from the other side
// arr.sunhift --> similar to pop, only from the other side
`)

arr[2] = "SWITCHED"

console.log(`
arr[2] = "SWITCHED"
// changes the element at index 2
${arr}
`)

console.log(arr)

console.log(`
arr.forEach(d => {
  console.log(typeof d)
})

// calls the function fiven as parameter for each element of the array beginning at index 0
`)

arr.forEach((d) => {
  console.log(typeof d)
})

console.log(`
let filtered = arr.filter(d => typeof d === "string")

// filters the array according to the given expression (in this case, fitlers the array for types string)
`)

let filtered = arr.filter((d) => typeof d === "string")
console.log(filtered)

console.log(`
arr.includes("hello")   ${arr.includes("hello")}
arr.indexOf("hello")    ${arr.indexOf("hello")}
`)

console.log(`
##################################################
##################################################

########## Objects ##########
in python called 'dictionaries'

let person1 = { name: "Hans", age: 35 }
let person2 = { name: "Julia", age: 27 }
let person3 = { name: "Sophie", age: 40 }

let person = [person1, person2, person3]
`)

let person1 = { name: "Hans", age: 35 }
let person2 = { name: "Julia", age: 27 }
let person3 = { name: "Sophie", age: 40 }

let persons = [person1, person2, person3]

console.log(`
person1.name      ${person1.name}
person1.address   ${person1.surname}
`)

console.log("console.table(persons)")

console.table(persons)

person1.address = "Cologne"

console.log('person1.address = "Cologne"')
console.log("console.table(persons)")

console.table(persons)

console.log(`
##################################################
##################################################
########## Functions ##########

There are several variants defining JavaScript functions:

1)
function say_hi (name) {
  console.log("Hi " + name + "!")
}

2)
let say_bye = (name) => {
  console.log("Bye " + name + "!")
}

3) (after => ist the returned expression, in this case the result of x + y)
let manhattan_distance = (x, y) =>  x + y

function manhattan_distance_oldschool_syntax (x, y) {
  return x + y
}
`)

function say_hi(name) {
  console.log("Hi " + name + "!")
}

let say_bye = (name) => {
  console.log("Bye " + name + "!")
}

let manhattan_distance = (x, y) => x + y

let names = ["Alex", "Martha", "Tim", "Jessica"]
console.log(`
You can pre-define functions and use them as callbacks

let names = ["Alex", "Martha", "Tim", "Jessica"]
names.forEach(say_hi)
`)

names.forEach(say_hi)

console.log(`
Or you can define functions in place

names.forEach(n => {
  console.log("My name is", n)
})
`)
