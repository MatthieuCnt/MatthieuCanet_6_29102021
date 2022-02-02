// launch modal form
function launchModal() {
	const modal_fetch_id = new URLSearchParams(
		document.location.search.substring(1),
	);
	const identifierModal = modal_fetch_id.get('id');

	const displayModal = photographer => {
		console.log(photographer);
		let modalInfo = {
			link: photographer.id,
			name: photographer.name,
			id: photographer.id,
		};
		create_modal(modalInfo);
	};

	// API REQUEST
	const getmodalInfo = async () => {
		const response = await fetch('./data/photographers.json');

		const data = await response.json();
		// console.log(data);

		data.photographers.map(photographer => displayModal(photographer));
	};
	getmodalInfo();

	const create_modal = modalInfo => {
		if (modalInfo.id == identifierModal) {
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
			namePhotographer.innerHTML = modalInfo.name;
			document
				.querySelector('.modal_section')
				.appendChild(namePhotographer);

			const formModal = document.createElement('form');
			formModal.classList.add('form_modal');
			document.querySelector('.modal_section').appendChild(formModal);

			const labelfirst = document.createElement('label');
			labelfirst.classList.add('label_modal');
			labelfirst.innerHTML = 'Prénom';
			document.querySelector('.form_modal').appendChild(labelfirst);

			const inputfirst = document.createElement('input');
			inputfirst.classList.add('input_modal');
			document.querySelector('.form_modal').appendChild(inputfirst);

			const labelname = document.createElement('label');
			labelname.classList.add('label_modal');
			labelname.innerHTML = 'Nom';
			document.querySelector('.form_modal').appendChild(labelname);

			const inputname = document.createElement('input');
			inputname.classList.add('input_modal');
			document.querySelector('.form_modal').appendChild(inputname);

			const labelmail = document.createElement('label');
			labelmail.classList.add('label_modal');
			labelmail.innerHTML = 'Email';
			document.querySelector('.form_modal').appendChild(labelmail);

			const inputmail = document.createElement('input');
			inputmail.classList.add('input_modal');
			document.querySelector('.form_modal').appendChild(inputmail);

			const labelnote = document.createElement('label');
			labelnote.classList.add('label_modal_text');
			labelnote.innerHTML = 'Votre message';
			document.querySelector('.form_modal').appendChild(labelnote);

			const inputnote = document.createElement('input');
			inputnote.classList.add('input_modal_text');
			document.querySelector('.form_modal').appendChild(inputnote);

			const btnSend = document.createElement('button');
			btnSend.classList.add('btn_send');
			btnSend.innerHTML = 'Envoyer';
			btnSend.addEventListener('click', closeModal);
			document.querySelector('.form_modal').appendChild(btnSend);
		}
	};
}

function closeModal(event) {
	var bground = document.getElementById('close_modal');
	bground.style.display = 'none';
	event.preventDefault();
}
