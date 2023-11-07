const gameBoard = document.querySelector('#gameBoard')
const ctx = gameBoard.getContext('2d') //The <canvas> element has a built-in object, called the getContext("2d") object, with methods and properties for drawing.
const score = document.querySelector('#score')
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn')
const stopBtn = document.querySelector('#stopBtn')

//GameBoard 
const gwidth = gameBoard.width;
const gheight = gameBoard.height

//creating the ball
const ballColor = 'yellow';
const ballBorderColor = 'black'
const ballRadius = 11.5   //Diameter is 21
const ballSpeed = 1  //Assigned lowest speed

//to Place the ball in the center

let ballX = gwidth / 2  //X - co-ordinate
let ballY = gheight /2   //Y - co-ordinate
let ballXDirection = 0    //Ball movements in X direction
let ballYDirection = 0    //Ball movements in Y direction

//Paddles
const paddleBorder = 'black';
const paddleSpeed = 40;
 //Scores
let player1Score = 0;
let player2Score = 0;

//creating Paddle Objects
let paddle1 = {
    width: 25,     //Paddle1 width
    height: 100,   //paddle2 height
    x: 0,         //To stick to left side of gameboard
    y: 0
}

let paddle2 = {
    width: 25,     //paddle2 width
    height: 100,
    x: gwidth - 25,   //Gameboard width minus paddle width,  to stay it in the right corner
    y: gheight - 100   //Gameboard height minus paddle height
}
 
//Paddle function
function paddles(){
    ctx.strokeStyle = paddleBorder;
    ctx.fillStyle = 'blue';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)

    ctx.fillStyle = 'red';
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    
};
paddles();
//A function to make a Ball
function makeBall(ballX, ballY){
    ctx.fillStyle = ballColor
    ctx.strokeStyle = ballBorderColor
    ctx.lineWidth = 3
    //CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean | undefined)
    ctx.arc(ballX, ballY , ballRadius, 0, 2*Math.PI )  
    ctx.stroke();
    ctx.fill()
}
makeBall(ballX,ballY);



