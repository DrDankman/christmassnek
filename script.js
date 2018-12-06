let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let imgX = 0;
let morphX = 0;
let morphY = 0;
let morphWidth = 50;
let morphHeight = 50;

function draw() {
	let fgImg = document.getElementById("fg-gfx");
	let morphImg = document.getElementById("morph");

	ctx.clearRect(0, 0, 640, 480);
	ctx.drawImage(fgImg, imgX, 0, 640, 480);
	ctx.drawImage(fgImg, (imgX + 640), 0, 640, 480);

	ctx.drawImage(morphImg, morphX, morphY, morphWidth, morphHeight);


	imgX = imgX - 1;
	if (imgX <= -640) {
		imgX = 0;
	}



	window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", function(e) {
	//console.log(e.key);
	switch(e.key) {
		case "s":
			morphY += 10;
		break;
		case "w":
			morphY -= 10;
		break;
		case "d":
			morphX += 10;
		break;
		case "a":
			morphX -= 10;
		break;
		default:
			// no
	}
	if (morphX < 0) {
		morphX = 0;
	}
	if (morphY < 0) {
		morphY = 0;
	}
	if (morphX > 640 - morphWidth) {
		morphX = 640 - morphWidth;
	}
	if (morphY > 480 - morphHeight) {
		morphY = 480 - morphHeight;
	}
}, false);




window.requestAnimationFrame(draw);