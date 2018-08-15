var scene = document.querySelector('a-scene');

function genCube(position) {
	var cube = document.createElement('a-box');
	cube.setAttribute('position', position);
	cube.setAttribute('height', '1')
	cube.setAttribute('width', '1')
	scene.appendChild(cube);
}

var deltaX = 0.25;
var deltaY = 0.25;
var deltaZ = 0.25;
var cubeLength = 1;

for (var i = 0; i < 10; i++) {
	position = new THREE.Vector3(-4,-1,-6.86);
	diff = new THREE.Vector3(cubeLength+deltaX,cubeLength+deltaX,-1*(cubeLength+deltaX))
	position.add(diff.multiplyScalar(i));
	genCube(position);
}