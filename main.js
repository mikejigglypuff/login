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
  const request = new Request("", {
    method: 'GET',
    body: '{"paramID": id, "paramPW": pw}'
  });

  fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on API server!');
    }
  })
  .then((response) => {
    console.debug(response);
  }).catch((error) => {
    console.error(error);
  });

}

function moveToRegister() {
  location.ref = "register.html";
}