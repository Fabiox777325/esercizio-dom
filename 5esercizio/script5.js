// Crea uno script che:

// Al click del bottone inserisca la modalità dark

/**
 *
 */

const button = document.querySelector('button');
const body = document.querySelector('body');
button.classList.add('theme');

button.addEventListener('click', () => {
	body.classList.toggle('theme');
	button.classList.toggle('theme');
	if (body.classList.contains('theme')) {
		button.innerText = 'Light mode';
	} else {
		button.innerText = 'Dark mode';
	}
});
