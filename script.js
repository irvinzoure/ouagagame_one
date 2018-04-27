//mettre en place le canvas par son id au seins du code

var canvas = document.getElementById("ouagagame");
var ctx = canvas.getContext("2d")
// creer la premiere fonction le carre vert
function rect() {
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
// creer la premiere fonction la balle noir

var ballRadius = 10;
rect()
function ball() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.closePath()
}
/**
 * POUR LA BALLE
 */
 var x = canvas.width/2;
// tout en haut
var y =  0 ;
// on creer les variables de distance
var dx = -1;
var dy = 1;


/**
 * POUR LE PADDLE
 * @type {number}
 */
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

// creer le draw qui looper le jeux
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  on clear chaque frame
    ball()
    x += dx;
    y += dy;
// bouger sur haut et le bas
    if(y + dy > canvas.height - ballRadius || y + dy < 0) {
        dy = -dy;
        console.log('sa touche')
    }
// bouger de droite  gauche
    if(x + dx > canvas.width  - ballRadius|| x + dx < 0) {
        dx = -dx;
        console.log('sa touche')
    }

}


setInterval(draw, 10);
