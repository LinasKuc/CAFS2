let userInfoOutput = document.getElementById('main');

let user = {
    firstName: "Vardas",
    lastName: "Pavarde"
  };

  userInfoOutput.innerHTML = ("<h2>User Information:</h2>" + `<p>User name: ${user.firstName}, Last name: ${user.lastName}.</p>`);