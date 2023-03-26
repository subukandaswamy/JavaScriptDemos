function getEmail(roll) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roll == "123") {
                resolve('subu@xyz.com')
            } else {
                reject("roll does not exist")
            }
        }, 200);
    })
}

function getNetid(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email == "subu@xyz.com") {
                resolve('b.kandaswamy')
            } else {
                reject("email does not exist")
            }
        }, 200);
    })
}

function getQuiz(netid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (netid == "b.kandaswamy") {
                resolve(20)
            } else {
                reject("netid does not exist")
            }
        }, 200);
    })
}

// getEmail('123')
// .then((email)=>getNetid(email))
// .then((netid)=>getQuiz(netid))
// .then((quiz)=> console.log("Quiz: "+quiz))
// .catch((err) =>console.log(err))

async function printquiz() {
    try{
    let email = await getEmail('123')
    let netid = await getNetid(email)
    let quiz = await getQuiz(netid)
    console.log("quiz::"+quiz)
    }catch(err){
        console.log(err);
    }
}

//printquiz().then(()=>console.log('done'))

async function add(x,y) {
    return x + y
}

console.log(add(1,2).then(console.log))



// CALLBACK HELL!
// getEmail('123',
//     (email) => {
//         getNetid(email,
//             (netid) => {
//                 getQuiz(netid,
//                     (quiz) => { console.log("quiz: " + quiz) },
//                     (err) => { console.log(err) })
//             },
//             (err) => { console.log(err) })
//     },
//     (err) => { console.log(err) })