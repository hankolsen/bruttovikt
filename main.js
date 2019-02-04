const form = document.querySelector('form');
const lengthEl = document.querySelector('input[name="length"]');
const maxLoadEl = document.querySelector('.maxLoad');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const bkEl = document.querySelector('input[name="bk"]:checked');
	const bk = bkEl.value;
	let length = lengthEl.value;
	if (isNaN(length)) {
		length = parseFloat(length.replace(',', '.'));
	}
	const maxLoad = findMaxLoad(bk, length);
	maxLoadEl.textContent = maxLoad.maxLoad;
});