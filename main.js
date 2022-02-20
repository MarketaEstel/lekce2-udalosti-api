// tady je místo pro náš program

let odstavec = document.querySelector("p");
let buttonColor = document.querySelector("button");
let buttonSize = document.querySelector("buttonSize");
let music = document.querySelector("buttonMusic");

function bold(event){
    console.log()
    odstavec.style.fontWeight = "bold";
}

function color(event) {
    odstavec.style.color = "darkred";
    odstavec.style.fontWeight = "bold";
    odstavec.style.backgroundColor = "gray";
}

function colorBack(event) {
    odstavec.style.color = "cadetblue";
    odstavec.style.fontWeight = "normal";
    odstavec.style.backgroundColor = "blanchedalmond";
}

//tuto funkci jsem nedokázala rozchodit :/
function fontSize(event) {
    console.log("fontSize + 1px");
    odstavec.style.fontSize = "font-size + 1px";
}

let audio = document.querySelector("#zvukovaStopa");

function play(event) {
    audio.play();
}

function pause(event) {
    audio.pause();
}

function volumeNone() {
    console.log("audio ticho");
    audio.volume = 0;
}

function volumeHalf() {
    console.log("audio50%");
    audio.volume = 0.5;
}

function volumeFull() {
    console.log("audio100%");
    audio.volume = 1;
}

function backToStart() {
    audio.currentTime = 0;
}







// console.log("kočička");

// let nadpis = document.querySelector("h1");
// nadpis.classList.add("zluty");
// nadpis.classList.remove("zluty")

// let ctverecek = document.querySelector("div.zluty");
// ctverecek.classList.add("ctverecek");