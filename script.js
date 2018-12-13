let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let imgX = 0;
let morphX0 = 160;
let morphY0 = 160;
let morphW = 32;
let morphH = 32;
let direction = 1;
let bodyparts = 1;
let posXtemp;
let posYtemp;

let morphImgs = document.getElementById("morphID").getElementsByTagName("img");

	
function draw() {
	/*
	let fgImg = document.getElementById("fg-gfx");
	let morphImg = document.getElementById("morph");

	ctx.clearRect(0, 0, 640, 480);
	ctx.drawImage(fgImg, imgX, 0, 640, 480);
	ctx.drawImage(fgImg, (imgX + 640), 0, 640, 480);

	ctx.drawImage(morphImg, morphX, morphY, morphWidth, morphHeight);
	*/
	
	for (let i = 0; i < bodyparts; i++) {
		if (direction = 1) {
			posYtemp = morphY0 - 32;
			posXtemp = morphX0;
		}
		else if (direction = 2) {
			posXtemp = morphX0 + 32;
			posYtemp = morphY0;
		}
		else if (direction = 3) {
			posYtemp = morphY0 + 32;
			posXtemp = morphX0;
		}
		else if (direction = 4) {
			posXtemp = morphX0 - 32;
			posYtemp = morphY0;
		}
		ctx.drawImage(morphImgs[i], posXtemp, posYtemp, 32, 32);
	}



	window.requestAnimationFrame(draw);
}



document.addEventListener("keydown", function(e) {
	console.log(e.key)
	;
	switch(e.key) {
		case "w":
			direction = 1;
		break;
		case "d":
			direction = 2;
		break;
		case "s":
			direction = 3;
		break;
		case "a":
			direction = 4;
		break;
		case "W":
			direction = 1;
		break;
		case "D":
			direction = 2;
		break;
		case "S":
			direction = 3;
		break;
		case "A":
			direction = 4;
		break;
		case "ArrowUp":
			direction = 1;
		break;
		case "ArrowRight":
			direction = 2;
		break;
		case "ArrowDown":
			direction = 3;
		break;
		case "ArrowLeft":
			direction = 4;
		break;
		default:
	} 
}, false);




window.requestAnimationFrame(draw);