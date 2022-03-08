// launch modal form
function launchModalImg() {
	document.getElementById('modal_img').style.display = 'block';

	function closemodalimg() {
		document.getElementById('modal_img').style.display = 'none';
		document.getElementById('modal_img').innerHTML = '';
	}

	//NEXT/PREV ARROW
	var slider_img = document.querySelector('.modal_picture');
	var images = document.querySelectorAll('.photographer_gallery_img');
	console.log(images);
	var i = 0;

	function prev() {
		if (i <= 0) i = images.length;
		i--;
	}

	function next() {
		if (i >= images.length - 1) i = -1;
		i++;
	}

	var identifierModalImg = this.id;

	const displayMediaImg = media => {
		let modalInfoImg = {
			id: media.id,
			photographerId: media.photographerId,
			title: media.title,
			image: media.image,
			video: media.video,
		};
		create_modal_img(modalInfoImg);
	};

	// API REQUEST
	const getmodalImgInfo = async () => {
		const response = await fetch('./data/photographers.json');

		const data = await response.json();

		data.medias.map(media => displayMediaImg(media));
	};
	getmodalImgInfo();

	const create_modal_img = modalInfoImg => {
		if (modalInfoImg.id == identifierModalImg) {
			const sectionModalImg = document.createElement('section');
			sectionModalImg.classList.add('modal_section_img');
			document
				.querySelector('.bground_modal_img')
				.appendChild(sectionModalImg);

			const btnCloseImg = document.createElement('i');
			btnCloseImg.className = 'fas fa-times cross_img';
			btnCloseImg.addEventListener('click', closemodalimg);
			document
				.querySelector('.modal_section_img')
				.appendChild(btnCloseImg);

			if (modalInfoImg.image) {
				const modal_img = document.createElement('img');
				modal_img.classList.add('modal_picture');
				modal_img.src = './assets/images/' + modalInfoImg.image;
				document
					.querySelector('.modal_section_img')
					.appendChild(modal_img);
			} else {
				const video_gallery = document.createElement('video');
				video_gallery.classList.add('modal_picture');
				video_gallery.src = './assets/images/' + modalInfoImg.video;
				video_gallery.setAttribute('controls', '');
				document
					.querySelector('.modal_section_img')
					.appendChild(video_gallery);
			}

			const title_img = document.createElement('h1');
			title_img.classList.add('title_img');
			title_img.innerHTML = modalInfoImg.title;
			document.querySelector('.modal_section_img').appendChild(title_img);

			const right_chevron = document.createElement('a');
			right_chevron.className = 'fas fa-chevron-right right_chevron';
			right_chevron.addEventListener('click', next);
			document
				.querySelector('.modal_section_img')
				.appendChild(right_chevron);

			const left_chevron = document.createElement('a');
			left_chevron.className = 'fas fa-chevron-left left_chevron';
			left_chevron.addEventListener('click', prev);
			document
				.querySelector('.modal_section_img')
				.appendChild(left_chevron);

			const total_title = document.querySelectorAll('.title-img');
			console.log(total_title);
		}
	};
}
