let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let imgX = 0;
let morphX0 = 160;
let morphY0 = 160;
let morphW = 32;
let morphH = 32;
let direction = 2;
let bodyparts = 1;
let posXtemp;
let posYtemp;
let traveled = 0;
let foodX;
let foodY;

let morphImgs = document.getElementById("morphID").getElementsByTagName("img");
let foodImg = document.getElementById("julskinka");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function spawnfood() {
	foodX = getRandomInt(20) * 32;
	foodY = getRandomInt(15) * 32;

	ctx.drawImage(julskinka, foodX, foodY, 32, 32);
}

spawnfood();
	
function draw() {	
	if (direction == 1) {
			morphY0 -= 32;
		}
		else if (direction == 2) {
			morphX0 += 32;
		}
		else if (direction == 3) {
			morphY0 += 32;
		}
		else if (direction == 4) {
			morphX0 -= 32;
		}

		if (morphX0 >= 640) {
			morphX0 -= 640;
		}
		if (morphX0 < 0) {
			morphX0 += 640;
		}
		if (morphY0 >= 480) {
			morphY0 -= 480;
		}
		if (morphY0 < 0) {
			morphY0 += 480;
		}
	traveled++;

	if (morphX0 == foodX && morphY0 == foodY) {
			bodyparts++;
			spawnfood();
		}

	for (let i = 0; i < bodyparts; i++) {
		

		ctx.clearRect(0, 0, 640, 480);
		ctx.drawImage(morphImgs[i], morphX0, morphY0, 32, 32);
		ctx.drawImage(julskinka, foodX, foodY, 32, 32);
	}
}

setInterval(function() {
			window.requestAnimationFrame(draw);
		}, 200);

document.addEventListener("keydown", function(e) {
	//console.log(e.key)
	;
	switch(e.key) {
		case "w":
			if (direction != 3 && traveled > 0) {				
				direction = 1;
				traveled = 0;
			}
		break;
		case "d":
			if (direction != 4 && traveled > 0) {				
				direction = 2;
				traveled = 0;
			}
		break;
		case "s":
			if (direction != 1 && traveled > 0) {				
				direction = 3;
				traveled = 0;
			}
		break;
		case "a":
			if (direction != 2 && traveled > 0) {				
				direction = 4;
				traveled = 0;
			}
		break;
		case "W":
			if (direction != 3 && traveled > 0) {				
				direction = 1;
				traveled = 0;
			}
		break;
		case "D":
			if (direction != 4 && traveled > 0) {				
				direction = 2;
				traveled = 0;
			}
		break;
		case "S":
			if (direction != 1 && traveled > 0) {				
				direction = 3;
				traveled = 0;
			}
		break;
		case "A":
			if (direction != 2 && traveled > 0) {				
				direction = 4;
				traveled = 0;
			}
		break;
		case "ArrowUp":
			if (direction != 3 && traveled > 0) {				
				direction = 1;
				traveled = 0;
			}
		break;
		case "ArrowRight":
			if (direction != 4 && traveled > 0) {				
				direction = 2;
				traveled = 0;
			}
		break;
		case "ArrowDown":
			if (direction != 1 && traveled > 0) {				
				direction = 3;
				traveled = 0;
			}
		break;
		case "ArrowLeft":
			if (direction != 2 && traveled > 0) {				
				direction = 4;
				traveled = 0;
			}
		break;
		default:
	} 
}, false);




window.requestAnimationFrame(draw);