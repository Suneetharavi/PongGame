const gameBoard = document.querySelector('#gameBoard')
const ctx = gameBoard.getContext('2d') //The <canvas> element has a built-in object, called the getContext("2d") object, with methods and properties for drawing.
const score = document.querySelector('#score')
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn')
const stopBtn = document.querySelector('#stopBtn')

const paddleBorder = 'black';
const gwidth = gameBoard.width;
const gheight = gameBoard.height
const paddleSpeed = 40;

let player1Score = 0;
let player2Score = 0;

//creating Paddles

let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
}

let paddle2 = {
    width: 25,
    height: 100,
    x: gwidth - 25,
    y: gheight - 100
}

function paddles(){
    ctx.strokeStyle = paddleBorder;
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)

    ctx.fillStyle = 'red';
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    ctx.StrokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
};

paddles();


