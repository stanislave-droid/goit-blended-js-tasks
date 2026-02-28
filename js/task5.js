const login = ["admin", "common"];
const password = ["admin", "common"];

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

alert(checkRegistration());
