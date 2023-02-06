let o = {
    v1: 10,
    v2: 20
}

let a = 10
let b = 20

function add1(x, y) {
    let res = x + y
    return res
}

function add2(obj) {
    let res = obj.v1 + obj.v2
    return res    
}

console.log(add1(a,b))
console.log(add2(o))

let student =  {
    name: "Zack",
    major: "CS",
    second_major: null,
    printDetails: function () {
        console.log("name: "+this.name);
        console.log("major:" + this.major);
    }
}

student.printDetails();

let res

console.log(res = console.log("h"))



if(a > b){
    res = 1
} else if (a < b){
    res = -1
} else {
    res = 0
}

res = a > b ? 1 : (a < b ? -1 : 0)