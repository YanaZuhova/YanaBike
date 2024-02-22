console.log(document);
console.log(document.body);
console.log(document.documentElement);
// document.body.style.backgroundColor = "blue";
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[0].firstElementChild);
console.log(document.body.children[0].lastElementChild);

// console.log(Array.from(document.body.children).forEach);

for (const element of document.body.children[0].children) {
    console.log(element);
}

console.log("...........");

Array.from(document.body.children[0].children).forEach((element) => 
console.log(element)
);
console.log("...........");

Array.from(document.body.children[0].children).forEach((element) => 
console.log(element.parentElement)
);

console.log(">ДЗ:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

console.log(document.getElementById("gorod"));
console.log(document.getElementById("shosse"));
console.log(document.getElementById("gora"));
console.log(document.getElementById("bmx"));
console.log(document.getElementById("deti"));
console.log(document.querySelector("#zapchasti"));
console.log(document.querySelector("#ekipa"));

console.log("...");

console.log(document.querySelectorAll(".navigation"));
console.log(document.getElementsByTagName("li"));

console.log("...........");

console.log(document.getElementsByTagName("input")[0].value);
console.log(document.getElementsByTagName("input")[1].value);
console.log(document.getElementsByTagName("input")[2].value);
console.log(document.getElementsByTagName("input")[3].value);
console.log(document.getElementsByTagName("input")[4].value);
console.log(document.getElementsByTagName("input")[5].value);
console.log(document.getElementsByTagName("input")[6].value);


