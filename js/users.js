const users = [];
const usersElement = document.getElementById("users");
const noUserElement = document.getElementById("no-user");
const emUserElement = document.getElementById("em-user");
function add() {
  let name = document.getElementById("txtUser");
  let male = document.getElementById("rdbMale");
  // console.log({ name: name.value, type: male.checked ? 1 : 2 });
  if (!name.value) {
      emUserElement.style.display = "block";
      return;
  }
  else{
    emUserElement.style.display = "none";
  }
  users.push(new user(name.value, male.checked));
  renderUsers();
  name.value = "";
  name.focus();
}

function renderUsers() {
  if (users.length > 0) {
    noUserElement.style.display = "none";
  } else {
    noUserElement.style.display = "unset";
  }
  usersElement.innerHTML = ""; //elementin içindeki herşeyi temizle
  for (let i = 0; i < users.length; i++) {
    const li = document.createElement("li");
    li.innerText = users[i].name;
    li.classList.add(users[i].type === 1 ? "male" : "female");
    usersElement.appendChild(li);
  }
}

function user(name, isMale) {
  this.name = name;
  this.type = isMale ? 1 : 2;
}
