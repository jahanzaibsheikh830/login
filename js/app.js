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

    if (userEmail.indexOf(email) === -1) {
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

function loginUser(){
    var lEmail = JSON.parse(localStorage.getItem('userEmail'));
    var lPass = JSON.parse(localStorage.getItem('userPassword'));
    var lName = JSON.parse(localStorage.getItem('userName'));
    var lPhone = JSON.parse(localStorage.getItem('userPhone'));
    var lGender = JSON.parse(localStorage.getItem('userGender'));
    var uEmail = document.getElementById('uEmail').value;
    var uPassword = document.getElementById('uPassword').value;
    uEmail = uEmail.toLowerCase();
    var i = lEmail.indexOf(uEmail);
    if(lEmail.indexOf(uEmail) === -1){
        document.getElementById('er').innerHTML = "Please Enter Valid Email";
    }
    else if (lPass[i] != uPassword ) {
        document.getElementById('per').innerHTML = "Please Enter Valid Password";  
    }
    else{
        var currentName = lName[i];
        var currentPhone = lPhone[i];
        var currentGender = lGender[i];
        document.getElementById('uEmail').value = "";
        document.getElementById('uPassword').value = "";
        alert("Login")
        // document.getElementById('forms').style.display = "none";
        // document.getElementById('user-info').style.display = "block";
        // document.getElementById('login-form').style.display = "none";
        console.log(currentName);
        document.getElementById('userN').innerHTML = "Welcome: "
        document.getElementById('userE').innerHTML = "Email: " 
        document.getElementById('userP').innerHTML = "Phone No: "
        document.getElementById('userG').innerHTML = "Gender: " 
        
        window.location.href = "profile.html";
        return false
    }
}
function login(){
    // document.getElementById('login-form').style.display = "block";
    // document.getElementById('forms').style.display = "none";
}
function logout(){
    // document.getElementById('forms').style.display = "block";
    // document.getElementById('user-info').style.display = "none";

}