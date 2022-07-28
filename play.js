let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let img = {"background":new Image(), "fakecastle":new Image()};

class Background {
    constructor() {
        img["background"].src = "Images/짭코배경.png";
        this.x = 0;
        this.y = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    draw() {
        ctx.drawImage(img["background"], this.x, this.y, this.width, this.height);
    }
}

class FakeCastle {
    constructor() {
        img["fakecastle"].src = "Images/짭코성.png";
        this.x = 1550;
        this.y = 200;
        this.width = 400;
        this.height = 400;
    }
    draw() {
        ctx.drawImage(img["fakecastle"], this.x, this.y, this.width, this.height);
    }
}

let background = new Background();
let ourCastle = new FakeCastle();
background.draw();
ourCastle.draw();

let interval = setInterval(update, 2)

function update() {

}