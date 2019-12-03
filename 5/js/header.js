var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



const rain = 100;

function render(time) {

  time *= 0.001;  // convert to seconds

  resizeCanvasToDisplaySize(ctx.canvas);

  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  // Create gradient, gradient colors from https://uigradients.com/#Memariani
  var grd = ctx.createLinearGradient(0,0,0,height);
  grd.addColorStop(0,"#aa4b6b");
  grd.addColorStop(0.5,"#6b6b83");
  grd.addColorStop(1,"#3b8d99");

  ctx.fillStyle = grd;
  ctx.fillRect(0,0,width,height);

  resetPseudoRandom();
  
  const speed = time * 100;

  ctx.fillStyle = "black";
  for (let i = 0; i < rain; ++i) {
  	const x = pseudoRandomInt(width);
  	const y = (pseudoRandomInt(height) + speed) % height;
  	ctx.fillRect(x, y, 2, 8);
  }

  ctx.fillStyle = "white";
  for (let i = 0; i < rain; ++i) {
  	const x = pseudoRandomInt(width);
  	const y = (pseudoRandomInt(height) + speed) % height;
  	ctx.fillRect(x, y, 2, 8);
  }
  
  requestAnimationFrame(render);
}

// javascript rain animation modified from stockoverflow user "gman"
// https://stackoverflow.com/questions/10809599/html-5-canvas-javascript-rain-animationhow-to-implement-efficiently-and-easily
requestAnimationFrame(render);

let randomSeed_ = 0;
const RANDOM_RANGE_ = Math.pow(2, 32);

function pseudoRandom() {
	return (randomSeed_ =
		(134775813 * randomSeed_ + 1) %
		RANDOM_RANGE_) / RANDOM_RANGE_;
};

function resetPseudoRandom() {
	randomSeed_ = 0;
};

function pseudoRandomInt(n) {
	return pseudoRandom() * n | 0;
}

function resizeCanvasToDisplaySize(canvas) {
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width;
		canvas.height = height;
	}
}
