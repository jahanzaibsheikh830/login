var userName = [];
var userEmail = [];
var userPassword = [];
var userPhone = [];
var userGender = [];
function getData() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;

    var lEmail = localStorage.getItem('userEmail');
    var lPass = localStorage.getItem('userPassword');
    var lName = localStorage.getItem('userName');
    var lPhone = localStorage.getItem('userPhone');
    var lGender = localStorage.getItem('userGender');

    if (lEmail == null && lPass == null && lName == null && lPhone == null && lGender == null) {
        userName = [];
        userEmail = [];
        userPassword = [];
        userPhone = [];
        userGender = [];
    }
    else {
        userName = JSON.parse(lName);
        userEmail = JSON.parse(lEmail);
        userPassword = JSON.parse(lPass);
        userPhone = JSON.parse(lPhone);
        userGender = JSON.parse(lGender);
    }
    if (userEmail.indexOf(email) == -1) {
        userName.push(name)
        userEmail.push(email)
        userPassword.push(password)
        userPhone.push(phone)
        userGender.push(gender)

        localStorage.setItem("userName", JSON.stringify(userName))
        localStorage.setItem("userEmail", JSON.stringify(userEmail))
        localStorage.setItem("userPassword", JSON.stringify(userPassword))
        localStorage.setItem("userPhone", JSON.stringify(userPhone))
        localStorage.setItem("userGender", JSON.stringify(userGender))

        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('success').innerHTML = `
        <p>You have successfully registered <a href="login.html" target="_blank">Login Now</a></p>`
        console.log(userEmail)
        console.log(userPassword)
    }
    else {
        document.getElementById('fail').innerHTML = "User Already Registered";
    }
}

var lEmail = JSON.parse(localStorage.getItem('userEmail'));
var lPass = JSON.parse(localStorage.getItem('userPassword'));
var lName = JSON.parse(localStorage.getItem('userName'));
var lPhone = JSON.parse(localStorage.getItem('userPhone'));
var lGender = JSON.parse(localStorage.getItem('userGender'));
function loginUser() {
    var uEmail = document.getElementById('uEmail').value;
    var uPassword = document.getElementById('uPassword').value;
    uEmail = uEmail.toLowerCase();
    var i = lEmail.indexOf(uEmail);
    if (lEmail.indexOf(uEmail) === -1) {
        document.getElementById('er').innerHTML = "Please Enter Valid Email";
    }
    else if (lPass[i] != uPassword) {
        document.getElementById('per').innerHTML = "Please Enter Valid Password";
    }
    else {
        document.getElementById('uEmail').value = "";
        document.getElementById('uPassword').value = "";
        alert("Login")
        localStorage.setItem("cIndex", JSON.stringify(i));
        location.href = "profile.html"
    }
    return false;
}
function loginSuccess() {
        var cIndex = JSON.parse(localStorage.getItem("cIndex"));    
        document.getElementById('userN').innerHTML = lName[cIndex];
        document.getElementById('userE').innerHTML = "Email: " + lEmail[cIndex]
        document.getElementById('userP').innerHTML = "Phone No: " + lPhone[cIndex]
        document.getElementById('userG').innerHTML = "Gender: " + lGender[cIndex]
    }