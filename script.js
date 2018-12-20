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
let morphImg;
let a;
let pause = false;
let treeX1 = getRandomInt(540);
let treeX2 = getRandomInt(540);
let treeX3 = getRandomInt(540);
let treeX4 = getRandomInt(540);
let treeX5 = getRandomInt(540);
let treeY = 200;

let morphImgs = document.getElementById("morphID").getElementsByTagName("img");
let foodImg = document.getElementById("julskinka");
let snowAImg = document.getElementById("snowA");
let snowBImg = document.getElementById("snowB");
let treeImg = document.getElementById("tree");

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
		else if (morphX0 < 0) {
			morphX0 += 640;
		}
		else if (morphY0 >= 480) {
			morphY0 -= 480;
		}
		else if (morphY0 < 0) {
			morphY0 += 480;
		}
	traveled = 1;

	if (morphX0 == foodX && morphY0 == foodY) {
			bodyparts++;
			spawnfood();
			/*while (foodX == morphX0 && foodY && morphY0) {
				spawnfood();
				console.log("new spawn");
			}*/
		}

	for (let i = 0; i < bodyparts; i++) {
		
		morphImg = morphImgs[i];
		a = i;
		if (a >= 20) {
			a = 19; 
		}
	}
		ctx.clearRect(0, 0, 640, 480);


		ctx.drawImage(snowBImg, 0, 0, 640, 480);
		ctx.drawImage(treeImg, treeX1, treeY, tree.width*0.8, tree.height*0.8);
		ctx.drawImage(treeImg, treeX2, treeY, tree.width*0.8, tree.height*0.8);
		ctx.drawImage(treeImg, treeX3, treeY, tree.width*0.8, tree.height*0.8);
		ctx.drawImage(treeImg, treeX4, treeY, tree.width*0.8, tree.height*0.8);
		ctx.drawImage(treeImg, treeX5, treeY, tree.width*0.8, tree.height*0.8);
		ctx.drawImage(snowAImg, 0, 0, 640, 480);
		ctx.drawImage(morphImgs[a], morphX0, morphY0, 32, 32);
		ctx.drawImage(julskinka, foodX, foodY, 32, 32);
}


setInterval(function() {
			//window.requestAnimationFrame(draw);
			if (!pause) {
				draw();
			}
		}, 200);
		

document.addEventListener("keydown", function(e) {
	//console.log(e.key);
	switch(e.key) {
		case " ":
			if (pause) {				
				pause = false;
			} else {
				pause = true;
			}
		break;
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