const element = document.documentElement;
// const buttons = document.querySelector("div#buttons") as HTMLDivElement;
// const gameStartButton = document.querySelector("input#gameSatrtButton") as HTMLInputElement;
// const optionButton = document.querySelector("input#optionButton") as HTMLInputElement;
const buttonsBackground = document.getElementById("buttonsBackground");
const gameStartButton = document.getElementById("gameStartButton");
const optionButton = document.getElementById("optionButton");


window.matchMedia('(display-mode: fullscreen)').addEventListener('change', ({ matches }) => {
    if (matches) {
        // 전체화면됨
    } else {
        // 전체화면 나감
    }
});

function gameStartButtonOnClick() {
    if (buttonsBackground != null && gameStartButton != null && optionButton != null) {
        buttonsBackground.style.animationPlayState = "running";
        gameStartButton.style.animationPlayState = "running";
        optionButton.style.animationPlayState = "running";
    }
}

function optionButtonOnClick() {
    
}