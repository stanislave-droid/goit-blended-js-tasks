function checkLogin(arrayOfLogins) {
  let userInput = prompt("Pls, write your login: ");
  userInput = userInput.trim().toLowerCase();
  for (let i = 0; i < arrayOfLogins.length; i++) {
    if (userInput == arrayOfLogins[i].toLowerCase()) {
      alert(`Welcome, ${arrayOfLogins[i]}`);
      return;
    }
  }
  alert("User not found");
}

const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);
