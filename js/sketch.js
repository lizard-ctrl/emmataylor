let orbs;
var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("resumeContent");

function setup() {
	
	noStroke();
	orbs = new Orbs();
}

function draw() {
	background(217,0,0,0);
	orbs.render();

	let pos = createVector(mouseX - (height>>1),mouseY - (width>>1));

	ambientLight(95, 139, 201);
	pointLight(255, 255, 255, pos.x, pos.y, 100);
}

class Orbs {
	constructor() {
		this.r = (height >> .9) - (height >> 30);
		this.count = 300;
		this.max = 40;
		this.rot = createVector();

		specularMaterial(250);
	}

	update() {
		this.rot.x -= 0.01;
		this.rot.y -= 0.01;
		this.rot.z -= 0.03;
		rotateX(radians(this.rot.x));
		rotateY(radians(this.rot.y));
		rotateZ(radians(this.rot.z));

		return this;
	}

	display() {
		for (let i = 0; i < this.count; i++) {

			let seed = i;
			let prln = lerp(-1, 2, noise(seed));

			rotateY(PI * prln);
			rotateZ(PI * prln);
			translate(this.r, 0, 0);

			sphere(prln * this.max, 100);

			translate(-this.r, 0, 0);
			rotateY(-(PI * prln));
			rotateZ(-(PI * prln));
		}
		return this;
	}

	render() {
		return this.update().display();
	}
}