var isLogged = 'no'

function login() {
  isLogged = "yes"
}

function sendText() {
  if (isLogged == "yes") {
    console.log("Hello World")
  }
}

console.log(isLogged);
login()
sendText();
console.log(isLogged);