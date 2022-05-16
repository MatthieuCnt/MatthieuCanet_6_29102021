// launch modal form
function launchModal() {
	document.querySelector('.logo').setAttribute('tabindex', '-1');
	document.querySelector('.photographer_name').setAttribute('tabindex', '-1');
	document
		.querySelector('.photographer_localization')
		.setAttribute('tabindex', '-1');
	document
		.querySelector('.photographer_tagline')
		.setAttribute('tabindex', '-1');
	document.querySelector('.contact_button').setAttribute('tabindex', '-1');
	document.querySelector('.photographer-img').setAttribute('tabindex', '-1');
	document.querySelector('.label').setAttribute('tabindex', '-1');
	document
		.querySelector('.css-select__selected')
		.setAttribute('tabindex', '-1');
	document
		.querySelector('.css-select__option')
		.setAttribute('tabindex', '-1');
	document
		.querySelector('.css-select__option')
		.setAttribute('tabindex', '-1');
	document
		.querySelector('.css-select__option1')
		.setAttribute('tabindex', '-1');

	var varImg = document.querySelectorAll('.photographer_gallery_img');
	for (var i = 0; i < varImg.length; i++) {
		varImg[i].setAttribute('tabindex', '-1');
	}

	var varImgFooter = document.querySelectorAll(
		'.photographer_gallery_footer_text',
	);
	for (var i = 0; i < varImgFooter.length; i++) {
		varImgFooter[i].setAttribute('tabindex', '-1');
	}

	var varlikes = document.querySelectorAll('.likes');
	for (var i = 0; i < varlikes.length; i++) {
		varlikes[i].setAttribute('tabindex', '-1');
	}

	var varheart = document.querySelectorAll('.far');
	for (var i = 0; i < varheart.length; i++) {
		varheart[i].setAttribute('tabindex', '-1');
	}

	document.querySelector('.span').setAttribute('tabindex', '-1');
	document
		.querySelector('.photographer_price')
		.setAttribute('tabindex', '-1');

	function closeModal(event) {
		document.getElementById('close_modal').remove();
		document.querySelector('.logo').setAttribute('tabindex', '1'); //1 à la base
		document
			.querySelector('.photographer_name')
			.setAttribute('tabindex', '2'); //2 à la base
		document
			.querySelector('.photographer_localization')
			.setAttribute('tabindex', '3'); //3 à la base
		document
			.querySelector('.photographer_tagline')
			.setAttribute('tabindex', '4'); //4 à la base
		document.querySelector('.contact_button').setAttribute('tabindex', '5'); //5 à la base
		document
			.querySelector('.photographer-img')
			.setAttribute('tabindex', '6'); //6 à la base
		document.querySelector('.label').setAttribute('tabindex', '7'); //7 à la base
		document
			.querySelector('.css-select__selected')
			.setAttribute('tabindex', '8'); //8 à la base
		document
			.querySelector('.css-select__option')
			.setAttribute('tabindex', '9'); //9 à la base
		document
			.querySelector('.css-select__option')
			.setAttribute('tabindex', '10'); //10 à la base
		document
			.querySelector('.css-select__option1')
			.setAttribute('tabindex', '11'); //11 à la base

		var varImg = document.querySelectorAll('.photographer_gallery_img');
		for (var i = 0; i < varImg.length; i++) {
			varImg[i].setAttribute('tabindex', '12');
		}

		var varImgFooter = document.querySelectorAll(
			'.photographer_gallery_footer_text',
		);
		for (var i = 0; i < varImgFooter.length; i++) {
			varImgFooter[i].setAttribute('tabindex', '12');
		}

		var varlikes = document.querySelectorAll('.likes');
		for (var i = 0; i < varlikes.length; i++) {
			varlikes[i].setAttribute('tabindex', '12');
		}

		var varheart = document.querySelectorAll('.far');
		for (var i = 0; i < varheart.length; i++) {
			varheart[i].setAttribute('tabindex', '12');
		}

		document.querySelector('.span').setAttribute('tabindex', '13'); //13 à la base
		document
			.querySelector('.photographer_price')
			.setAttribute('tabindex', '14'); //14 à la base
	}

	function sendModal(event) {
		console.log(document.getElementById('first').value);
		console.log(document.getElementById('name').value);
		console.log(document.getElementById('mail').value);
		console.log(document.getElementById('note').value);
		document.getElementById('close_modal').remove();
		document.querySelector('.logo').setAttribute('tabindex', '1'); //1 à la base
		document
			.querySelector('.photographer_name')
			.setAttribute('tabindex', '2'); //2 à la base
		document
			.querySelector('.photographer_localization')
			.setAttribute('tabindex', '3'); //3 à la base
		document
			.querySelector('.photographer_tagline')
			.setAttribute('tabindex', '4'); //4 à la base
		document.querySelector('.contact_button').setAttribute('tabindex', '5'); //5 à la base
		document
			.querySelector('.photographer-img')
			.setAttribute('tabindex', '6'); //6 à la base
		document.querySelector('.label').setAttribute('tabindex', '7'); //7 à la base
		document
			.querySelector('.css-select__selected')
			.setAttribute('tabindex', '8'); //8 à la base
		document
			.querySelector('.css-select__option')
			.setAttribute('tabindex', '9'); //9 à la base
		document
			.querySelector('.css-select__option')
			.setAttribute('tabindex', '10'); //10 à la base
		document
			.querySelector('.css-select__option1')
			.setAttribute('tabindex', '11'); //11 à la base

		var varImg = document.querySelectorAll('.photographer_gallery_img');
		for (var i = 0; i < varImg.length; i++) {
			varImg[i].setAttribute('tabindex', '12');
		}

		var varImgFooter = document.querySelectorAll(
			'.photographer_gallery_footer_text',
		);
		for (var i = 0; i < varImgFooter.length; i++) {
			varImgFooter[i].setAttribute('tabindex', '12');
		}

		var varlikes = document.querySelectorAll('.likes');
		for (var i = 0; i < varlikes.length; i++) {
			varlikes[i].setAttribute('tabindex', '12');
		}

		var varheart = document.querySelectorAll('.far');
		for (var i = 0; i < varheart.length; i++) {
			varheart[i].setAttribute('tabindex', '12');
		}

		document.querySelector('.span').setAttribute('tabindex', '13'); //13 à la base
		document
			.querySelector('.photographer_price')
			.setAttribute('tabindex', '14'); //14 à la base
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
		btnClose.tabIndex = '1';
		document.querySelector('.modal_section').appendChild(btnClose);

		const cross = document.createElement('i');
		cross.classList.add('cross');
		cross.className = 'fas fa-times';
		document.querySelector('.close').appendChild(cross);

		const title = document.createElement('h1');
		title.classList.add('title_modal');
		title.innerHTML = 'Contactez-moi';
		title.tabIndex = '2';
		document.querySelector('.modal_section').appendChild(title);

		const namePhotographer = document.createElement('h1');
		namePhotographer.classList.add('title_modal');
		namePhotographer.innerHTML = infosForModal.name;
		namePhotographer.tabIndex = '3';
		document.querySelector('.modal_section').appendChild(namePhotographer);

		const formModal = document.createElement('form');
		formModal.classList.add('form_modal');
		document.querySelector('.modal_section').appendChild(formModal);

		const labelfirst = document.createElement('label');
		labelfirst.classList.add('label_modal');
		labelfirst.innerHTML = 'Prénom';
		labelfirst.tabIndex = '4';
		document.querySelector('.form_modal').appendChild(labelfirst);

		const inputfirst = document.createElement('input');
		inputfirst.classList.add('input_modal');
		inputfirst.id = 'first';
		inputfirst.tabIndex = '5';
		document.querySelector('.form_modal').appendChild(inputfirst);

		const labelname = document.createElement('label');
		labelname.classList.add('label_modal');
		labelname.innerHTML = 'Nom';
		labelname.tabIndex = '6';
		document.querySelector('.form_modal').appendChild(labelname);

		const inputname = document.createElement('input');
		inputname.classList.add('input_modal');
		inputname.id = 'name';
		inputname.tabIndex = '7';
		document.querySelector('.form_modal').appendChild(inputname);

		const labelmail = document.createElement('label');
		labelmail.classList.add('label_modal');
		labelmail.innerHTML = 'Email';
		labelmail.tabIndex = '8';
		document.querySelector('.form_modal').appendChild(labelmail);

		const inputmail = document.createElement('input');
		inputmail.classList.add('input_modal');
		inputmail.id = 'mail';
		inputmail.tabIndex = '9';
		document.querySelector('.form_modal').appendChild(inputmail);

		const labelnote = document.createElement('label');
		labelnote.classList.add('label_modal_text');
		labelnote.innerHTML = 'Votre message';
		labelnote.tabIndex = '10';
		document.querySelector('.form_modal').appendChild(labelnote);

		const inputnote = document.createElement('input');
		inputnote.classList.add('input_modal_text');
		inputnote.id = 'note';
		inputnote.tabIndex = '11';
		document.querySelector('.form_modal').appendChild(inputnote);

		const btnSend = document.createElement('button');
		btnSend.classList.add('btn_send');
		btnSend.innerHTML = 'Envoyer';
		btnSend.tabIndex = '12';
		btnSend.setAttribute('aria-label', 'Envoyer');
		btnSend.addEventListener('click', sendModal);
		document.querySelector('.form_modal').appendChild(btnSend);
	};

	create_modal(infosForModal);
}
