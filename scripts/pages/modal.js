// launch modal form
function launchModal() {
	function closeModal(event) {
		document.getElementById('close_modal').remove();
	}

	function sendModal(event) {
		console.log(document.getElementById('first').value);
		console.log(document.getElementById('name').value);
		console.log(document.getElementById('mail').value);
		console.log(document.getElementById('note').value);
		document.getElementById('close_modal').remove();
	}

	window.addEventListener('keydown', function (event) {
		if (event.key == 'Escape') {
			closeModal();
		}
	});
	// INSERT ELEMENT IN HTML
	const create_modal = infosForModal => {
		const divModal = document.createElement('div');
		divModal.classList.add('bground_modal');
		divModal.id = 'close_modal';
		document.querySelector('article').appendChild(divModal);

		const sectionModal = document.createElement('section');
		sectionModal.classList.add('modal_section');
		document.querySelector('.bground_modal').appendChild(sectionModal);

		const btnClose = document.createElement('button');
		btnClose.classList.add('close');
		btnClose.addEventListener('click', closeModal);
		btnClose.setAttribute('aria-label', 'Fermer la fenêtre');
		document.querySelector('.modal_section').appendChild(btnClose);

		const cross = document.createElement('i');
		cross.classList.add('cross');
		cross.className = 'fas fa-times';
		document.querySelector('.close').appendChild(cross);

		const title = document.createElement('h1');
		title.classList.add('title_modal');
		title.innerHTML = 'Contactez-moi';
		document.querySelector('.modal_section').appendChild(title);

		const namePhotographer = document.createElement('h1');
		namePhotographer.classList.add('title_modal');
		namePhotographer.innerHTML = infosForModal.name;
		document.querySelector('.modal_section').appendChild(namePhotographer);

		const formModal = document.createElement('form');
		formModal.classList.add('form_modal');
		document.querySelector('.modal_section').appendChild(formModal);

		const labelfirst = document.createElement('label');
		labelfirst.classList.add('label_modal');
		labelfirst.innerHTML = 'Prénom';
		document.querySelector('.form_modal').appendChild(labelfirst);

		const inputfirst = document.createElement('input');
		inputfirst.classList.add('input_modal');
		inputfirst.id = 'first';
		document.querySelector('.form_modal').appendChild(inputfirst);

		const labelname = document.createElement('label');
		labelname.classList.add('label_modal');
		labelname.innerHTML = 'Nom';
		document.querySelector('.form_modal').appendChild(labelname);

		const inputname = document.createElement('input');
		inputname.classList.add('input_modal');
		inputname.id = 'name';
		document.querySelector('.form_modal').appendChild(inputname);

		const labelmail = document.createElement('label');
		labelmail.classList.add('label_modal');
		labelmail.innerHTML = 'Email';
		document.querySelector('.form_modal').appendChild(labelmail);

		const inputmail = document.createElement('input');
		inputmail.classList.add('input_modal');
		inputmail.id = 'mail';
		document.querySelector('.form_modal').appendChild(inputmail);

		const labelnote = document.createElement('label');
		labelnote.classList.add('label_modal_text');
		labelnote.innerHTML = 'Votre message';
		document.querySelector('.form_modal').appendChild(labelnote);

		const inputnote = document.createElement('input');
		inputnote.classList.add('input_modal_text');
		inputnote.id = 'note';
		document.querySelector('.form_modal').appendChild(inputnote);

		const btnSend = document.createElement('button');
		btnSend.classList.add('btn_send');
		btnSend.innerHTML = 'Envoyer';
		btnSend.setAttribute('aria-label', 'Envoyer');
		btnSend.addEventListener('click', sendModal);
		document.querySelector('.form_modal').appendChild(btnSend);
	};

	create_modal(infosForModal);
}
