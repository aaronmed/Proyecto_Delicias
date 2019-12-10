window.onload = initialize;

const KEY_W_UP = 119;
const KEY_S_DOWN = 115;
const KEY_A_LEFT = 97;
const KEY_D_RIGHT = 100;

var playerx = 115;
var playery = 115;
var velplayer = 10;
var vel = 0.5;

var posX = 30;
var posY = 30;
var posX2 = 200;
var posY2 = 200;

var sizeplayer = 20;
var sizeshit = 20;

var time = 0;
var ptos = 0;
var multi = 1;

var canvas;
var ctx;
var imgShit;
var imgBurguer;
var move = false;
var pause = false;

var j = 0;
var i = 0;
var increase = false;

function initialize() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    loadImages();
    showTime();
    showPoints();
    window.addEventListener('keypress', movePlayerMouse);
}

function loadImages() {
    imgShit = new Image();
    imgBurguer = new Image();

    imgBurguer.src = "img/burguer.png";
    imgShit.src = "img/shit.png";
}

function movePlayerMouse(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (event.keyCode) {
        case KEY_W_UP:
            if ((playery - velplayer) >= 0)
                playery -= velplayer;
            break;
        case KEY_S_DOWN:
            if ((playery + velplayer) <= 230)
                playery += velplayer;
            break;
        case KEY_A_LEFT:
            if ((playerx - velplayer) >= 0)
                playerx -= velplayer;
            break;
        case KEY_D_RIGHT:
            if ((playerx + velplayer) <= 230)
                playerx += velplayer;
            break;
    }
    drawPlayer();
    drawShit();
}

function drawShit() {
    ctx.drawImage(imgShit, posX, posY, sizeshit, sizeshit);
    ctx.drawImage(imgShit, posX2, posY2, sizeshit, sizeshit);
}

function drawPlayer() {
    ctx.drawImage(imgBurguer, playerx, playery, sizeplayer, sizeplayer);
}

function movShit() {
    if (move) {
        if(posX > 250 && posY > 250){
            posX = 0;
            posY = Math.floor(Math.random() * 250);;
        }
        posX = posX + vel;
        posY = posY + vel;
        if(posX2 < 0 && posY2 < 0){
            posX2 = 250;
            posY2 = Math.floor(Math.random() * 250);;
        }
        posX2 = posX2 - vel;
        posY2 = posY2 - vel;
    }
}

function clean() {
    ctx.clearRect(0, 0, 250, 250);
}

function fail() {
    if ((playerx < posX + sizeshit &&
        playerx + sizeplayer > posX &&
        playery < posY + sizeshit &&
        sizeplayer + playery > posY) || playerx < posX2 + sizeshit &&
        playerx + sizeplayer > posX2 &&
        playery < posY2 + sizeshit &&
        sizeplayer + playery > posY2) {
        clean();
        ctx.font = "30px Georgia";
        canvas.fillStyle = "black";
        ctx.fillText("GAME OVER", 35, 130);
        ctx.font = "20px Georgia";
        ctx.fillText("Has ganado " + ptos + " puntos", 35, 145);
        move = false;
        window.removeEventListener('keypress', movePlayerMouse);
    }
}

function main() {
    if (move) {
        if (!pause) {
            window.addEventListener('keypress', movePlayerMouse);
            clean();
            fail();
            drawShit();
            drawPlayer();
            movShit();
            showTime();
            showPoints();
        } else {
            window.removeEventListener('keypress', movePlayerMouse);
        }
    } else {
        window.removeEventListener('keypress', movePlayerMouse);
        fail();
    }
}
function changeBack() {
    if (i == 0) {
        canvas.style.backgroundImage = "url('img/boxing.png')";
        i = 1;
    } else {
        canvas.style.backgroundImage = "url('img/fondo.png')";
        i = 0;
    }
}

function changePlayer() {
    if (j == 0) {
        imgBurguer.src = "img/shit.png";
        j = 1;
    } else {
        imgBurguer.src = "img/burguer.png";
        j = 0;
    }

}

function changeSpeed() {
    vel += 1;
    velplayer += 1;
    multi++;
}

function start() {
    move = true;
    pause = false;
}

function pause(){
    move = false;
    pause = true;
}

function showTime(){
    ctx.fillText("Tiempo: " + time, 10, 20);
}
function showPoints(){
    ctx.fillText("Puntos: " + ptos, 190, 20);
}
function increasePoints(){
    if (increase){
        if (time % 10 == 0){
            ptos+=multi;
            increase = false;
        }
    }
}

function increaseTime(){
    time++;
    increase = true;
}

function controlTime(){
    if (move){
        increaseTime();
        increasePoints();
    }  
}

setInterval(function () {
    main();
}, 5000 / 800);

setInterval(function () {
    controlTime();
}, 1000);