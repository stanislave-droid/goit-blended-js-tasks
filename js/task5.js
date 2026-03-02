const login = ["admin", "common"];
const password = ["admin", "common"];

// Version 1
function checkRegistration() {
  let inputLogin = prompt("Pls, write your login: ");
  for (let i = 0; i < login.length; i++) {
    if (inputLogin == login[i]) {
      let inputPassword = prompt("Pls, write your password: ");
      if (inputPassword == password[i]) {
        return `Hi ${inputLogin}`;
      } else {
        return "Wrong password";
      }
    }
  }
  return "Wrong login";
}

//Version 2

function checkRegistration2() {
  let inputLogin = prompt("Pls, write your login: ");
  const index = login.indexOf(inputLogin);
  if (index >= 0) {
    let inputPassword = prompt("Pls, write your password: ");
    if (password[index] == inputPassword) {
      return `Hi ${inputLogin}`;
    } else {
      return "Wrong password";
    }
  } else {
    return "Wrong login";
  }
}

alert(checkRegistration());
alert(checkRegistration2());
