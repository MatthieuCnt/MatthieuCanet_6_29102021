// launch modal form
function launchModalImg(e) {
	console.log(e.target);
	console.log(e.target.dataset.id);

	document.getElementById('modal_img').style.display = 'block';
	document.getElementById('modal_img').setAttribute('tabindex', '-1');
	document.getElementById('modal_img').focus();

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
	for (let i = 0; i < varImgFooter.length; i++) {
		varImgFooter[i].setAttribute('tabindex', '-1');
	}

	var varlikes = document.querySelectorAll('.likes');
	for (let i = 0; i < varlikes.length; i++) {
		varlikes[i].setAttribute('tabindex', '-1');
	}

	var varheart = document.querySelectorAll('.far');
	for (let i = 0; i < varheart.length; i++) {
		varheart[i].setAttribute('tabindex', '-1');
	}

	document.querySelector('.span').setAttribute('tabindex', '-1');
	document
		.querySelector('.photographer_price')
		.setAttribute('tabindex', '-1');

	// Close modal form
	function closemodalimg() {
		document.getElementById('modal_img').style.display = 'none';
		document.getElementById('modal_img').innerHTML = '';

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
		for (let i = 0; i < varImgFooter.length; i++) {
			varImgFooter[i].setAttribute('tabindex', '12');
		}

		var varlikes = document.querySelectorAll('.likes');
		for (let i = 0; i < varlikes.length; i++) {
			varlikes[i].setAttribute('tabindex', '12');
		}

		var varheart = document.querySelectorAll('.far');
		for (let i = 0; i < varheart.length; i++) {
			varheart[i].setAttribute('tabindex', '12');
		}

		document.querySelector('.span').setAttribute('tabindex', '13'); //13 à la base
		document
			.querySelector('.photographer_price')
			.setAttribute('tabindex', '14'); //14 à la base
	}

	// Arrow next/prev img
	function prev() {
		if (index == 0) {
			index = mediasForLightbox.length - 1;
		} else {
			index = index - 1;
		}
		document.getElementById('modal_img').innerHTML = '';
		create_modal_img(mediasForLightbox[index]);
	}

	function next() {
		if (index < mediasForLightbox.length - 1) {
			index = index + 1;
		} else {
			index = 0;
		}
		document.getElementById('modal_img').innerHTML = '';
		create_modal_img(mediasForLightbox[index]);
	}

	window.addEventListener('keydown', function (event) {
		if (event.key == 'ArrowRight') {
			next(1);
		}

		if (event.key == 'ArrowLeft') {
			prev(-1);
		}
	});

	window.addEventListener('keydown', function (event) {
		if (event.key == 'Escape') {
			closemodalimg();
		}
	});

	// INSERT ELEMENT IN HTML
	const create_modal_img = mediasForLightbox => {
		const sectionModalImg = document.createElement('section');
		sectionModalImg.classList.add('modal_section_img');
		sectionModalImg.classList.add('trap_focus');
		sectionModalImg.focus();
		document
			.querySelector('.bground_modal_img')
			.appendChild(sectionModalImg);

		const btnCloseImg = document.createElement('button');
		btnCloseImg.classList.add('cross_img');
		btnCloseImg.addEventListener('click', closemodalimg);
		btnCloseImg.setAttribute('aria-label', 'Fermer la fenêtre');
		btnCloseImg.tabIndex = '1';
		btnCloseImg.addEventListener('keydown', function (event) {
			if (event.key == 'Enter') {
				closemodalimg();
			}
		});
		document.querySelector('.modal_section_img').appendChild(btnCloseImg);

		const cross = document.createElement('i');
		cross.classList.add('cross');
		cross.className = 'fas fa-times';
		document.querySelector('.cross_img').appendChild(cross);

		if (mediasForLightbox.image) {
			const modal_img = document.createElement('img');
			modal_img.classList.add('modal_picture');
			modal_img.src = './assets/images/' + mediasForLightbox.image;
			document.querySelector('.modal_section_img').appendChild(modal_img);
		} else {
			const video_gallery = document.createElement('video');
			video_gallery.classList.add('modal_picture');
			video_gallery.src = './assets/images/' + mediasForLightbox.video;
			video_gallery.setAttribute('controls', '');
			document
				.querySelector('.modal_section_img')
				.appendChild(video_gallery);
		}

		const title_img = document.createElement('h1');
		title_img.classList.add('title_img');
		title_img.innerHTML = mediasForLightbox.title;
		title_img.tabIndex = '4';
		document.querySelector('.modal_section_img').appendChild(title_img);

		const right_chevron = document.createElement('button');
		right_chevron.className = ' right_chevron';
		right_chevron.setAttribute('aria-label', 'Suivant');
		right_chevron.addEventListener('click', next);
		right_chevron.addEventListener('keydown', function (event) {
			if (event.key == 'Enter') {
				next();
			}
		});
		right_chevron.tabIndex = '3';
		document.querySelector('.modal_section_img').appendChild(right_chevron);

		const right_button = document.createElement('i');
		right_button.className = 'fas fa-chevron-right';
		document.querySelector('.right_chevron').appendChild(right_button);

		const left_chevron = document.createElement('button');
		left_chevron.className = 'left_chevron';
		left_chevron.setAttribute('aria-label', 'Précédent');
		left_chevron.addEventListener('click', prev);
		left_chevron.addEventListener('keydown', function (event) {
			if (event.key == 'Enter') {
				prev();
			}
		});
		left_chevron.tabIndex = '2';
		document.querySelector('.modal_section_img').appendChild(left_chevron);

		const left_button = document.createElement('i');
		left_button.className = 'fas fa-chevron-left';
		document.querySelector('.left_chevron').appendChild(left_button);
	};

	console.log(mediasForLightbox);
	//var identifierModalImg = this.id;
	var identifierModalImg = e.target.dataset.id;
	console.log(identifierModalImg);

	for (i = 0; i < mediasForLightbox.length; i++) {
		if (mediasForLightbox[i].id == identifierModalImg) {
			create_modal_img(mediasForLightbox[i]);
			var index = i;
		}
	}
}
