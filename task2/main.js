
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const colorTest = document.querySelector('.color-test');

red.addEventListener('input', changeColor);
green.addEventListener('input', changeColor);
blue.addEventListener('input', changeColor);

function changeColor() {
	colorTest.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

