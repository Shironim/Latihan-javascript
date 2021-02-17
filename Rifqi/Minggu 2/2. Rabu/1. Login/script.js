window.onload = ()=> {
    this.sessionStorage.setItem("username","Admin");
    this.sessionStorage.setItem("password", "Admin123");
}

var input = document.getElementsByTagName('input');
var login = document.getElementById('login');
var form = document.querySelector('form');
form.onsubmit = ()=> {return false}

login.onclick = ()=> {
    if ((input[0].value != "") && (input[1].value != "")) {
        if ((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password"))){
            form.onsubmit = ()=> {return 1}
            document.cookie = "username"+input[0].value;
            document.cookie = "password"+input[0].value;
        }
        else {
            if  ((input[0].value != sessionStorage.getItem("username")) && (input[1].value != sessionStorage.getItem("password"))) {
                alert('Username dan Password salah')
            }
            else if ((input[0].value != sessionStorage.getItem("username"))) {
                alert('Username salah');
            }
            else if ((input[1].value != sessionStorage.getItem("password"))) {
                alert('Password salah')
            }
        }
    }
}
