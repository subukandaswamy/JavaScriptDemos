// // let arr = [2,3,5]


// // arr.test = "Subu".

// // for(const key in arr){
// //     console.log(key+"-->"+arr[key]);
// // }

// // function add(x,y) {
// //     return x + y
// // }

// // //console.log(add(1,2));


// // let sumObj = {
// //     v1: 10,
// //     v2: 20,
// //     sum: function () {
// //         return this.v1 + this.v2
// //     }
// // }

// // let s2 = {
// //     v1: 15,
// //     v2: 25
// // }


// // console.log(sumObj.sum())

// // console.log(sumObj.sum.call(sumObj))

// function Student(name, major) {
//     this.name = name
//     this.major = major
// }

// Student.prototype.printDetails = function () {
//     console.log("Name:",this.name, "Major:", this.major);
// }

// function GraduateStudent(name, major, thesis) {
//     Student.call(this, name, major)
//     this.thesis = thesis
// }
// GraduateStudent.prototype = Object.create(Student.prototype)

// GraduateStudent.prototype.printDetails = function () {
//     console.log("Name:",this.name, "Major:", this.major, "Thesis:", this.thesis);
// }

// const stud1 = new Student("Subu","CS")
// const stud2 = new Student( "John","CS")
// const stud3 = new Student( "Jane","CS")
// const gs = new GraduateStudent("Tom", "CS", "Relational Patterns")


// const students = [ stud1, stud2, stud3, gs]

// for(const s of students){
//     //console.log(s);
//     s.printDetails()
// }

// let o = {v1: 10}
// console.log(o);

class Student {
    constructor(name, major){
        this.name = name
        this.major = major
    }
    printDetails(){
        console.log("Name:",this.name, "Major:", this.major);
    }
}

class GraduateStudent extends Student {
    constructor(name, major, thesis){
        super(name, major)
        this.thesis = thesis
    }
    printDetails() {
        console.log("Name:",this.name, "Major:", this.major, "Thesis:", this.thesis);
    }
}

const stud1 = new Student("Subu","CS")
const stud2 = new Student( "John","CS")
const stud3 = new Student( "Jane","CS")
const gs = new GraduateStudent("Tom", "CS", "Relational Patterns")

const students = [ stud1, stud2, stud3, gs]

for(const s of students){
    //console.log(s);
    s.printDetails()
}

