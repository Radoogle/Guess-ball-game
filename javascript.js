"use strict";
var slider = document.getElementById("range"),
    outputB = document.getElementById("outputBlue"),
    outputR = document.getElementById("outputRed"),
    inputBalls = document.getElementById("input-all-balls"),
    totalBalls = inputBalls.value;

slider.max = totalBalls;
slider.value = totalBalls / 2;
UpdateRatio();

inputBalls.oninput = function () {
    totalBalls = inputBalls.value;
    slider.max = totalBalls;
    slider.value = totalBalls / 2;
    UpdateRatio();
};

slider.oninput = function () {
    UpdateRatio();
};

function OpenCloseAboutWindow() {
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

function UpdateRatio() {
    outputB.innerHTML = slider.value;
    outputR.innerHTML = totalBalls - slider.value;
};