let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// 1. isolate/filter even numbers
// 2. compute square of it
// 3. sum them up

// function isEven(x) {
//     return x % 2 == 0
// }

// function sqr(x) {
//     return x * x
// }

// function add(newv, e) {
//     console.log("newv: ", newv, " e: ", e)
//     return newv + e
// }

// let newarr = arr.filter(isEven)

// let newarr1 = newarr.map(sqr)

// let sum = newarr1.reduce(add, 0)

// console.log(sum);

let sum2 = arr.filter((x) => x % 2 == 0)
    .map((x) => x * x)
    .reduce((x, y) => x + y)

console.log(sum2);

