function sayHello() {
    console.log("Merhaba " + new Date());
}

function addUsers() {
    const names = ["Can", "Sümeyra", "Tufan", "Berk", "Metehan", "Esengül"];
    let index = 0;
    const element = document.getElementById("users");

    function addNewUser(){
        let name = names[index];
        index++; 
        if (index === names.length) {
            clearInterval(timer);
        }
        let userElement = document.createElement("li");
        userElement.innerText = name;
        element.appendChild(userElement); 
    }

    let timer = setInterval(addNewUser, 1000);
}

addUsers();