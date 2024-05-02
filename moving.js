let gorod = document.getElementById("gorod");
let shosse = document.getElementById("shosse");
let gora = document.getElementById("gora");
let bmx = document.getElementById("bmx");
let deti = document.getElementById("deti");
let zapchasti = document.getElementById("zapchasti");
let ekipa = document.getElementById("ekipa");
let contact = document.getElementById("contact");

document.querySelectorAll("li")[
   document.querySelectorAll("li").lengh - 1 
];

console.log(gorod);
console.log(shosse);
console.log(gora);
console.log(bmx);
console.log(deti);
console.log(zapchasti);
console.log(ekipa);
console.log(contact);


gorod.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
});

shosse.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
});

gora.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
});

let goTopBtn = document.getElementById("GoTop");

goTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});