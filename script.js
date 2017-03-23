var canvas = document.getElementById("gameboard");
var ctx = canvas.getContext("2d");

var rolling;
var x = 0;
var starty = canvas.height-20;
var y = starty;
var radius = 10;
var ballDx = 3;
var ballDy = 5;

var nugsize = 5;
var nRandx = Math.floor(Math.random() * (canvas.width - nugsize));
var nRandy = Math.floor(Math.random() * (canvas.height - nugsize));

var enemyr = 7;
var eRandx = Math.floor(Math.random() * (canvas.width - enemyr));
var eRandy = Math.floor(Math.random() * (canvas.height - enemyr)); 

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = true;
	} else if (e.keyCode == 37) {
		leftPressed = true;
	} else if (e.keyCode == 38) {
		upPressed = true;
	} else if (e.keyCode == 40) {
		downPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	} else if (e.keyCode == 37) {
		leftPressed = false;
	} else if (e.keyCode == 38) {
		upPressed = false;
	} else if (e.keyCode == 40) {
		downPressed = false;
	}
}

function gameball() {
	ctx.beginPath();
	ctx.arc(x + radius, y, radius, 0, Math.PI * 2, false);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
}

function nuggets() {
	ctx.beginPath();
	ctx.rect(nRandx, nRandy, nugsize, nugsize);
	ctx.lineWidth = "1";
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();
}

function enemies() {
	ctx.beginPath();
	ctx.arc(eRandx, eRandy, enemyr, 0, Math.PI * 2, false);
	ctx.fillStyle = "orange";
	ctx.fill();
	ctx.closePath();
}

function controls() {
	// if (rightPressed && x < canvas.width - (2 * radius)) {
	// 	x += ballDx;
	// } 

	// if (leftPressed && x > 0) {
	// 	x -= ballDx;
	// }

	if (upPressed && y > radius) {
		y -= ballDy;
	}

	if (downPressed && y < canvas.height - radius) {
		y += ballDy;
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	gameball();
	nuggets();
	enemies();
	controls();

	if (x + ballDx > canvas.width - (2 * radius) || x + ballDx < 0) {
		ballDx = -ballDx;
	}

	// x += ballDx;
}

function play() {

}

setInterval(draw, 20);