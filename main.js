const form = document.querySelector('form');
const lengthEl = document.querySelector('input[name="length"]');
const maxLoadEl = document.querySelector('.maxLoad');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const bkEl = document.querySelector('input[name="bk"]:checked');
	const bk = bkEl.value;
	const length = lengthEl.value;
	const maxLoad = findMaxLoad(bk, length);
	maxLoadEl.textContent = maxLoad.maxLoad;
});