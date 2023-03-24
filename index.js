function fetchdata(callback){
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(json => callback(json.data[0].email))
    .catch(err => console.log(err))
}

function fetchdata1(callback) {
    setTimeout(() => {
        callback('subu@xyz.com')
    }, 200);
}

function pophtml(email) {
    document.getElementById("result").innerHTML = email
}

function test() {
    //pophtml('subu@xyz.com')
    fetchdata1(pophtml)
    return false;
}