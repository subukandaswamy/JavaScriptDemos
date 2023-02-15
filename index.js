// 

class Student {
    static hello(){
        console.log("say hello");
    }
    #marks
    constructor(name,major){
        this.name = name
        this.major = major
    }
    getMarks(){
        return this.#marks
    }
    setMarks(marks){
        this.#marks = marks
    }
}

const stud = new Student("Subu","CS")
stud.name = "Zack"
stud.setMarks(90)
console.log(stud.getMarks());
console.log(Student.hello())