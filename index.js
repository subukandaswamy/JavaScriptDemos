
const add = function (x,y) {
    return x + y
}

const add1 = (x,y) => x + y

const arr = [2,3,5,7]

// for(a of arr){
// if(a==3) continue;
// console.log(a);
// }

// let i=0

let o = {
    a: 1,
    b: 2
}

with(o){
    console.log(a, b);
}

//let {a} = o
// console.log(a)

// for(const [key, val] of Object.entries(o)){
//     console.log("key:"+ key)
//     console.log("value:"+ val)
// }

// let g = [7,8]
// const [h, j] = g

// console.log(h,j);

//var vs let

let x = 10

if(x > 5){
    let x = 5
    console.log(x);
}

console.log(x);