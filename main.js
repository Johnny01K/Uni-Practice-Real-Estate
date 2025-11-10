const fontPlus = document.getElementById("fontPlus");
const fontMinus = document.getElementById("fontMinus");
const temaSvetla = document.getElementById("temaSvetla");
const temaTamna = document.getElementById("temaTamna");

let currentFontSize = 100;

fontPlus.addEventListener("click", () => {
    currentFontSize += 10;
    document.body.style.fontSize = currentFontSize + "%";
});
fontMinus.addEventListener("click", () => {
    if (currentFontSize > 60) {
        currentFontSize -= 10;
        document.body.style.fontSize = currentFontSize + "%";
    }
});

temaTamna.addEventListener("click", () => {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
    document.querySelectorAll("a").forEach(a => a.style.color = "#797979ff");

    const forma = document.querySelector(".html-forma");
    if (forma) {
        forma.style.backgroundColor = "#1e1e1e";
        forma.style.color = "#ffffff";
    }
});

temaSvetla.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    document.querySelectorAll("a").forEach(a => a.style.color = "");

    const forma = document.querySelector(".html-forma");
    if (forma) {
        forma.style.backgroundColor = "#ffffff";
        forma.style.color = "#000000";
    }
});