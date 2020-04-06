"use strict";
var slider = document.getElementById("range"),
    outputB = document.getElementById("outputBlue"),
    outputR = document.getElementById("outputRed"),
    inputBalls = document.getElementById("input-all-balls"),
    totalBalls = inputBalls.value,
    gameOn = false;

slider.max = totalBalls;
slider.value = totalBalls / 2;
updateRatio();

if (!gameOn) {
    document.getElementById("choose-container").style.display = "none";
}


inputBalls.oninput = function () {
    totalBalls = inputBalls.value;
    slider.max = totalBalls;
    slider.value = totalBalls / 2;
    updateRatio();
};

slider.oninput = function () {
    updateRatio();
};

function openCloseAboutWindow() {
    let ifr = document.getElementById("about-frame"),
        main = document.getElementById("main"),
        d = document.getElementById("about-frame").style.display;
    if (d == "block") {
        ifr.style.display = "none";
        main.style.display = "block";
    } else {
        ifr.style.display = "block";
        main.style.display = "none";
    }
};

function updateRatio() {
    outputB.innerHTML = slider.value;
    outputR.innerHTML = totalBalls - slider.value;
};

function randomColor(min = 1, max = 10) {
    let color = Math.floor(Math.random() * (max - min + 1) + min);
    if (color < 5) 
        return "blue";
    else return "red";
}

function go() {
    let total = totalBalls;
    let color;
    gameOn = true;
    document.getElementById("choose-container").style.display = "block";
//    while (total-- > 0) {
//        color = randomColor();
//        let form = document.getElementById("radio-choose-color");
//        form.onchange = function() {
//            let choice = form.value;
//            alert(choice);
//        }
//        
//        alert("next");
//        
//        }
    alert("Game over!");
    //gameOn = false;
    
}