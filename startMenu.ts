const startMenuButtons = document.getElementById("startMenuButtons");
const startMenuAnimation = document.getElementById("startMenuAnimation");
const gameStartButton = document.getElementById("gameStartButton");
const optionButton = document.getElementById("optionButton");
const stageMenuButtons = document.getElementById("stageMenuButtons");
const stageMenuAnimation = document.getElementById("stageMenuAnimation");
const choiceBox = document.getElementById("choiceBox");

const startMenuBGM = new Audio("Musics/startMenuBGM");

window.matchMedia('(display-mode: fullscreen)').addEventListener('change', ({ matches }) => {
    if (matches) {
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.backgroundSize = "1643px";
    }
});

setInterval(function () {
    const color = ["rgb(255, 255, 0)", "rgb(255, 0, 255)"];
    let i = 0;

    if (choiceBox != null) {
        if (i == 0) {
            choiceBox.style.borderColor = color[i++];
        }
        else if (i != 0) {
            choiceBox.style.borderColor = color[i--];
        }
    }
}, 200);

function gameStartButtonOnClick() {
    startMenuBGM.play();
    if (startMenuButtons != null && startMenuAnimation != null) {
        startMenuButtons.style.animationPlayState = "running";
        startMenuAnimation.style.animationPlayState = "running";
    }
    if (stageMenuButtons != null && stageMenuAnimation != null && choiceBox != null) {
        stageMenuButtons.style.animationPlayState = "running";
        stageMenuAnimation.style.animationPlayState = "running";
        choiceBox.style.animationPlayState = "running";
    }
}

function optionButtonOnClick() {
    
}