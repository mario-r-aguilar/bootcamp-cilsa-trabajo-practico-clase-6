const form = document.getElementById('contact-form');
const notification = document.getElementById('notification');
const sendBtn = document.getElementById('send-btn');

const sendMessage = (message) => {
	notification.innerHTML = '';
	const div = document.createElement('div');
	div.innerHTML = `
    <div class="alert alert-warning" role="alert">${message}</div>
    `;
	notification.appendChild(div);
	setTimeout(function () {
		notification.innerHTML = '';
	}, 2000);
};

const validField = () => {
	const nameInput = document.getElementById('name-input').value;
	const emailInput = document.getElementById('email-input').value;
	const messageInput = document.getElementById('message-input').value;
	const regex = /^\s+$/;

	if (
		!nameInput ||
		!emailInput ||
		!messageInput ||
		regex.test(nameInput) ||
		regex.test(emailInput) ||
		regex.test(messageInput)
	) {
		sendMessage('Todos los campos del formulario son obligatorios');
		return false;
	}
	return true;
};

const validEmail = (email) => {
	let emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
	if (!emailRegex.test(email)) {
		sendMessage(
			'El formato del email no es válido. Ejemplo válido: usuario@dominio.com'
		);
		return false;
	}
	return true;
};

const removeNumbers = (input) => {
	let content = input.value;
	let numbersRegex = /[0-9]/g;
	if (numbersRegex.test(content)) {
		content = content.replace(numbersRegex, '');
		input.value = content;
		sendMessage('No se admiten números en el campo nombre completo');
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (validField()) {
		const emailInput = document.getElementById('email-input').value;

		if (validEmail(emailInput)) {
			sendMessage('El formulario se envió satisfactoriamente');
			form.reset();
		}
	}
});
