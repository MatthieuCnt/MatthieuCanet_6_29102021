const photographer_fetch_id = new URLSearchParams(
	document.location.search.substring(1),
);
const identifier = photographer_fetch_id.get('id');

const displayInfo = photographer => {
	console.log(photographer);
	let photographerInfo = {
		link: photographer.id,
		img: './assets/photographers/' + photographer.portrait,
		name: photographer.name,
		id: photographer.id,
		localization: photographer.city + ', ' + photographer.country,
		tagline: photographer.tagline,
		price: photographer.price + '€/jour',
	};
	create_article(photographerInfo);
};

const displayMedia = media => {
	console.log(media);
	let MediaInfo = {
		id: media.id,
		photographerId: media.photographerId,
		title: media.title,
		image: media.image,
		likes: media.likes,
		date: media.date,
		price: media.price,
		video: media.video,
	};
	create_article_img(MediaInfo);
};

const footerInfo = photographer => {
	console.log(photographer);
	let photographerInfo = {
		id: photographer.id,
		price: photographer.price + '€ / jour',
	};

	create_footer(photographerInfo);
};

// API REQUEST
const getPhotographersInfo = async () => {
	const response = await fetch('./data/photographers.json');

	const data = await response.json();
	// console.log(data);

	data.photographers.map(photographer => displayInfo(photographer));
	data.medias.map(media => displayMedia(media));
	data.photographers.map(photographer => footerInfo(photographer));
};

getPhotographersInfo();

// INSERT ELEMENT IN HTML
const create_article = photographerInfo => {
	if (photographerInfo.id == identifier) {
		const article = document.createElement('article');
		article.classList.add('photograph_header');
		document.querySelector('header').appendChild(article);

		const div = document.createElement('div');
		div.classList.add('photograph_text');
		document.querySelector('article').appendChild(div);

		const name = document.createElement('h1');
		name.classList.add('photographer_name');
		name.innerHTML = photographerInfo.name;
		document.querySelector('div').appendChild(name);

		const localization = document.createElement('p');
		localization.classList.add('photographer_localization');
		localization.innerHTML = photographerInfo.localization;
		document.querySelector('div').appendChild(localization);

		const tagline = document.createElement('p');
		tagline.classList.add('photographer_tagline');
		tagline.innerHTML = photographerInfo.tagline;
		document.querySelector('div').appendChild(tagline);

		const btn = document.createElement('button');
		btn.className = 'contact_button';
		btn.addEventListener('click', launchModal);
		btn.innerHTML = 'Contactez-moi';
		document.querySelector('article').appendChild(btn);

		const img = document.createElement('img');
		img.classList.add('photographer-img');
		img.src = photographerInfo.img;
		document.querySelector('article').appendChild(img);

		const section = document.createElement('section');
		section.classList.add('photographer_picture');
		document.querySelector('main').appendChild(section);

		const label = document.createElement('label');
		label.htmlFor = 'ListMenu';
		label.innerHTML = 'Trier par';
		document.querySelector('section').appendChild(label);

		const select = document.createElement('select');
		select.classList.add('select_style');
		select.addEventListener('click', rotateFunction);
		document.querySelector('section').appendChild(select);

		// Rotation arrow
		function rotateFunction() {
			var arrow = document.getElementById('arrow');
			arrow.style.transform = 'rotate(180deg)';
		}

		const i_arrow = document.createElement('i');
		i_arrow.id = 'arrow';
		i_arrow.className = 'fas fa-angle-down arrow';
		document.querySelector('section').appendChild(i_arrow);

		const option = document.createElement('option');
		option.classList.add('select_style_option');
		option.value = 'Popularité';
		option.innerHTML = 'Popularité';
		document.querySelector('select').appendChild(option);

		const option1 = document.createElement('option');
		option1.classList.add('select_style_option');
		option1.value = 'Date';
		option1.innerHTML = 'Date';
		document.querySelector('select').appendChild(option1);

		const option2 = document.createElement('option');
		option2.classList.add('select_style_option');
		option2.value = 'Titre';
		option2.innerHTML = 'Titre';
		document.querySelector('select').appendChild(option2);

		const div_gallery = document.createElement('div');
		div_gallery.classList.add('photographer_gallery');
		document.querySelector('main').appendChild(div_gallery);
	}
};
const create_article_img = MediaInfo => {
	if (MediaInfo.photographerId == identifier) {
		const figure = document.createElement('figure');
		figure.classList.add('photographer_gallery_picture');
		figure.id = MediaInfo.id;
		figure.addEventListener('click', launchModalImg);
		document.querySelector('.photographer_gallery').appendChild(figure);

		if (MediaInfo.image) {
			const img_gallery = document.createElement('img');
			img_gallery.classList.add('photographer_gallery_img');
			img_gallery.src = './assets/images/' + MediaInfo.image;
			document.getElementById(MediaInfo.id).appendChild(img_gallery);
		} else {
			const video_gallery = document.createElement('video');
			video_gallery.classList.add('photographer_gallery_img');
			video_gallery.src = './assets/images/' + MediaInfo.video;
			video_gallery.setAttribute('controls', '');
			document.getElementById(MediaInfo.id).appendChild(video_gallery);
		}

		const div_footer = document.createElement('figcaption');
		div_footer.classList.add('photographer_gallery_footer');
		div_footer.id = MediaInfo.id + '_footer';
		document.getElementById(figure.id).appendChild(div_footer);

		const text = document.createElement('p');
		text.classList.add('photographer_gallery_footer_text');
		text.innerHTML = MediaInfo.title;
		document.getElementById(div_footer.id).appendChild(text);

		const div_heart = document.createElement('div');
		div_heart.classList.add('photographer_gallery_footer_heart');
		div_heart.id = MediaInfo.id + '_heart';
		document.getElementById(div_footer.id).appendChild(div_heart);

		const span_likes = document.createElement('span');
		span_likes.classList.add('likes');
		span_likes.innerHTML = MediaInfo.likes;
		document.getElementById(div_heart.id).appendChild(span_likes);

		const heart = document.createElement('i');
		heart.className = 'fas fa-heart heart';
		document.getElementById(div_heart.id).appendChild(heart);
	}
};

const create_footer = photographerInfo => {
	if (photographerInfo.id == identifier) {
		const footer_section = document.createElement('section');
		footer_section.classList.add('footer_section');
		document.querySelector('footer').appendChild(footer_section);

		const footer_div = document.createElement('div');
		footer_div.classList.add('footer_div');
		document.querySelector('.footer_section').appendChild(footer_div);

		const total_likes = document.querySelectorAll('.likes');
		var total = 0;
		Array.from(total_likes).forEach((Element, index) => {
			total += parseInt(Element.innerHTML);
		});
		console.log(total_likes);

		const footer_span = document.createElement('span');
		footer_span.innerHTML = total;
		document.querySelector('.footer_div').appendChild(footer_span);

		const footer_heart = document.createElement('i');
		footer_heart.className = 'fas fa-heart footer_heart';
		document.querySelector('.footer_div').appendChild(footer_heart);

		const footer_price = document.createElement('p');
		footer_price.classList.add('photographer_price');
		footer_price.innerHTML = photographerInfo.price;
		document.querySelector('.footer_section').appendChild(footer_price);
	}
};
