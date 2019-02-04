const form = document.querySelector('form');
const lengthEl = document.querySelector('input[name="length"]');
const curbWeightEl = document.querySelector('input[name="curbWeight"]');
const maxWeightEl = document.querySelector('.maxWeight');
const maxLoadEl = document.querySelector('.maxLoad');

const getNumberValue = (value) => parseFloat(value.replace(',', '.'));

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const bkEl = document.querySelector('input[name="bk"]:checked');
	const bk = bkEl.value;
	const length = getNumberValue(lengthEl.value);
	const curbWeight = getNumberValue(curbWeightEl.value);
	const maxWeight = findmaxWeight(bk, length);
	const maxLoad = maxWeight - curbWeight;
	maxWeightEl.textContent = maxWeight;
	maxLoadEl.textContent = maxLoad;
});