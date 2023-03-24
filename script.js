function getemail(roll) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (roll == '123') {
                resolve('subu@xyz.com')
            } else {
                reject('roll does not match')
            }
        }, 200)
    });
}



function getnetid(email) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (email == 'subu@xyz.com') {
            resolve('b.kandaswamy')
        } else {
            reject('email does not match')
        }
    }, 200);
});
}
function getquiz(netid) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (netid == 'b.kandaswamy') {
            resolve('15')
        } else {
            reject('netid does not match')
        }
    }, 200);
});
}

getemail('1234')
.then((email) => getnetid(email))
.catch((err)=> console.log('here'))
.then((netid)=> getquiz(netid))
.then((quiz) => console.log(quiz))
.catch((err)=> console.log(err))

async function printquiz() {
    try{
    let email = await getemail('123')
    let netid = await getnetid(email)
    let quiz = await getquiz(netid)
    console.log(quiz)
    }catch(err){
        console.log(err);
    }  
}
// printquiz().then(()=>console.log('done'))

async function add(x,y) {
    return x + y
}

console.log(add(1,2).then(console.log))

// getemail('123',
//     (email) => {
//         getnetid(email,
//             (netid) => {
//                 getquiz(netid,
//                     (quiz) => { console.log(quiz) },
//                     (err) => { console.log(err) })
//             },
//             (err) => { console.log(err) })
//     },
//     (err) => { console.log(err) }
// )