function mainClick(e, r) {
    console.log("first");
}

function mediumClick() {
    console.log("second");
}

function buttonClick(e) {
    e.stopPropagation();
    console.log("button");
}

const first = document.getElementById("first");
const second = document.getElementById("second");
const ob = document.getElementById("otherButton");
first.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    console.log("other button capture"); 
 }, false);

 first.addEventListener("click", function () {
    console.log("2nd other button capture"); 
 }, false);

 second.addEventListener("click", function () {
    console.log("second capture"); 
 }, false);
 
 ob.addEventListener("click", function () {
    console.log("first capture"); 
 }, false);


 // 1 . stopPropogation <----->  2 . stopImmediatePropagation
 // 1 . : parent elementlerin event fırlatmasını engeller
 // 2 . : stopPropogation işlemini yapar ve yanında kendine ait diğer eventlerin çalışmasını da engeller