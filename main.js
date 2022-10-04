var loginbutton = document.getElementById("login");
var registerbutton = document.getElementById("register");
loginbutton.addEventListener("onmousedown", loginHandle);
registerbutton.addEventListener("onmousedown", moveToRegister)

function loginHandle() {
  var id = document.getElementById("id").value;
  if(id === NULL) {
    alert("ID를 입력하세요");
    clearIDPW();
    return;
  }
  var pw = document.getElementById("pw").value;
  if(pw === NULL) {
    alert("PW를 입력하세요");
    clearIDPW();
    return;
  }
  checkIDPW(id, pw);
  clearIDPW();
}

function clearIDPW() {
  var id = document.getElementById("id").value;
  var pw = document.getElementById("pw").value;
  id, pw = NULL, NULL;
}

function checkIDPW(id, pw) {
  var xmlHttp = new XMLHttpRequest();
  
}

function moveToRegister() {
  location.ref = "register.html";
}