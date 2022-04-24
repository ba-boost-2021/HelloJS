Array.prototype.convertToJson = function () {
    return JSON.stringify(this, null, 2);
}

function writeToOutput(data) {
    if (!Array.isArray(data)) {
        return;
    }
    const output = document.getElementById("output")
    output.innerHTML = data.convertToJson();
}

var people = [
    { id: 1, name: "Can Perk", age: 28, hasLicence: true },
    { id: 2, name: "Metehan Çam", age: 27, hasLicence: false },
    { id: 3, name: "Berk Özerdoğan", age: 26, hasLicence: true },
    { id: 4, name: "Tufan Yıldırım", age: 30, hasLicence: false },
    { id: 5, name: "Sümeyra Mızrak", age: 24, hasLicence: true },
    { id: 6, name: "Kaan Çalışkan", age: 18, hasLicence: false },
    { id: 7, name: "İsmail Kara", age: 22, hasLicence: true },
    { id: 8, name: "Laçin Tan", age: 21, hasLicence: false },
    { id: 9, name: "Esengül Özkul", age: 24, hasLicence: false },
]
window.onload = function () {
    writeToOutput(people);
}

function onlyNames() {
    let data = people.map(function (p) {
        return p.name
    });
    writeToOutput(data);
}

function namesAndBirthDates() {
    let data = people.map(function (p) {
        let year = new Date().getFullYear();
        return { name: p.name.toUpperCase(), age: year - p.age }
    });
    writeToOutput(data);
}

function onlyLicensed() {
    let data = people.filter(function (p) {
        return p.hasLicence === true;
    });
    writeToOutput(data);
}

function sortByAge() {
    let data = people.sort(function (f, n) {
        return f.age - n.age
    }).reverse();
    writeToOutput(data);
}

function increaseAge() {
    people.forEach(function (p) {
        if (p.hasLicence) {
            p.age += 3;
        }
    });
    writeToOutput(people);
}

function add() {
    const n = { id: 10, name: "Sergen Kahraman", age: 21, hasLicence: true};
    people.push(n);
    writeToOutput(people);
}

function addToTop() {
    const n = { id: 10, name: "Sergen Kahraman", age: 21, hasLicence: true};
    people.unshift(n);
    writeToOutput(people);
}

function removeFromTop() {
    people.shift();
    writeToOutput(people);
}

function removeFromBottom() {
    people.pop();
    writeToOutput(people);
}