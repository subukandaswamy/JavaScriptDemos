function fetchdata2(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(this.responseText)
        console.log(jsonData);
        callback(jsonData.data[0].email)
    }
    };
    xhttp.open("GET", "https://reqres.in/api/users", true);
    xhttp.send();
  }

function fetchdata(callback) {
    fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(jsonData => callback(jsonData.data[0].email))
}
function fetchdata1(callback) {
    setTimeout(() => {
        callback('subu@xyz.com')
    }, 200);
}
function populatehtml(email) {
    document.getElementById("email").innerHTML = email
}
function test() {
    fetchdata2(populatehtml)
    return false;
}