const photographer_fetch_id = new URLSearchParams(
	document.location.search.substring(1),
);
const identifier = photographer_fetch_id.get('id');

const displayInfo = photographer => {
	let photographerInfo = {
		link: photographer.id,
		img: './assets/photographers/' + photographer.portrait,
		name: photographer.name,
		id: photographer.id,
		localization: photographer.city + ', ' + photographer.country,
		tagline: photographer.tagline,
		price: photographer.price + '€/jour',
	};
};

let mediasForLightbox = [];

const displayMedia = media => {
	/*console.log(media);*/
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

	mediasForLightbox.push({
		id: media.id,
		title: media.title,
		url: media.url, // image ou video
	});
};

const footerInfo = photographer => {
	let photographerInfo = {
		id: photographer.id,
		price: photographer.price + '€ / jour',
	};
};

// API REQUEST
const getPhotographersInfo = async () => {
	const response = await fetch('./data/photographers.json');

	const data = await response.json();

	data.photographers.map(photographer => displayInfo(photographer));
	//console.log(data.photographers);

	var myphotographer = data.photographers.find(photographer => {
		return photographer.id == identifier;
	});
	//console.log(myphotographer);
	create_article(myphotographer);

	data.medias.map(media => displayMedia(media));
	var mymedias = data.medias.filter(media => {
		return media.photographerId == identifier;
	});
	console.log(mymedias);
	for (i = 0; i < mymedias.length; i++) {
		create_article_img(mymedias[i]);
	}

	data.photographers.map(photographer => footerInfo(photographer));
	var myfooter = data.photographers.find(photographer => {
		return photographer.id == identifier;
	});
	create_footer(myfooter);
};

getPhotographersInfo();

// INSERT ELEMENT IN HTML
const create_article = myphotographer => {
	const article = document.createElement('article');
	article.classList.add('photograph_header');
	document.querySelector('header').appendChild(article);

	const div = document.createElement('div');
	div.classList.add('photograph_text');
	document.querySelector('article').appendChild(div);

	const name = document.createElement('h1');
	name.classList.add('photographer_name');
	name.innerHTML = myphotographer.name;
	document.querySelector('div').appendChild(name);

	const localization = document.createElement('p');
	localization.classList.add('photographer_localization');
	localization.innerHTML =
		myphotographer.city + ', ' + myphotographer.country;
	document.querySelector('div').appendChild(localization);

	const tagline = document.createElement('p');
	tagline.classList.add('photographer_tagline');
	tagline.innerHTML = myphotographer.tagline;
	document.querySelector('div').appendChild(tagline);

	const btn = document.createElement('button');
	btn.classList.add('contact_button');
	btn.addEventListener('click', launchModal);
	btn.innerHTML = 'Contactez-moi';
	document.querySelector('article').appendChild(btn);

	const img = document.createElement('img');
	img.classList.add('photographer-img');
	img.src = './assets/photographers/' + myphotographer.portrait;
	document.querySelector('article').appendChild(img);

	const section = document.createElement('section');
	section.classList.add('photographer_picture');
	document.querySelector('main').appendChild(section);

	const label = document.createElement('label');
	label.htmlFor = 'ListMenu';
	label.innerHTML = 'Trier par';
	document.querySelector('section').appendChild(label);

	const divSelect = document.createElement('div');
	divSelect.classList.add('css-select');
	document.querySelector('section').appendChild(divSelect);

	const input = document.createElement('input');
	input.type = 'hidden';
	input.name = 'select1';
	input.value = '';
	document.querySelector('.css-select').appendChild(input);

	const input1 = document.createElement('input');
	input1.type = 'button';
	input1.classList.add('css-select__selected');
	input1.value = 'Popularité';
	input1.arialabel = 'select1';

	document.querySelector('.css-select').appendChild(input1);

	const divButton = document.createElement('div');
	divButton.classList.add('css-select__dropdown');
	document.querySelector('.css-select').appendChild(divButton);

	const buttonSelect = document.createElement('button');
	buttonSelect.type = 'button';
	buttonSelect.classList.add('css-select__option');
	buttonSelect.innerHTML = 'Date';
	document.querySelector('.css-select__dropdown').appendChild(buttonSelect);

	const buttonOption = document.createElement('button');
	buttonOption.type = 'button';
	buttonOption.classList.add('css-select__option');
	buttonOption.innerHTML = 'Titre';
	document.querySelector('.css-select__dropdown').appendChild(buttonOption);

	const div_gallery = document.createElement('div');
	div_gallery.classList.add('photographer_gallery');
	document.querySelector('main').appendChild(div_gallery);
};

const create_article_img = mymedias => {
	//if (MediaInfo.photographerId == identifier) {
	const figure = document.createElement('figure');
	figure.classList.add('photographer_gallery_picture');
	figure.id = mymedias.id;
	figure.addEventListener('click', launchModalImg);
	document.querySelector('.photographer_gallery').appendChild(figure);

	if (mymedias.image) {
		const img_gallery = document.createElement('img');
		img_gallery.classList.add('photographer_gallery_img');
		img_gallery.src = './assets/images/' + mymedias.image;
		document.getElementById(mymedias.id).appendChild(img_gallery);
	} else {
		const video_gallery = document.createElement('video');
		video_gallery.classList.add('photographer_gallery_img');
		video_gallery.src = './assets/images/' + mymedias.video;
		video_gallery.setAttribute('controls', '');
		document.getElementById(mymedias.id).appendChild(video_gallery);
	}

	const div_footer = document.createElement('figcaption');
	div_footer.classList.add('photographer_gallery_footer');
	div_footer.id = mymedias.id + '_footer';
	document.getElementById(figure.id).appendChild(div_footer);

	const text = document.createElement('p');
	text.classList.add('photographer_gallery_footer_text');
	text.innerHTML = mymedias.title;
	document.getElementById(div_footer.id).appendChild(text);

	const div_heart = document.createElement('div');
	div_heart.classList.add('photographer_gallery_footer_heart');
	div_heart.id = mymedias.id + '_heart';
	document.getElementById(div_footer.id).appendChild(div_heart);

	const span_likes = document.createElement('span');
	span_likes.classList.add('likes');
	span_likes.innerHTML = mymedias.likes;
	document.getElementById(div_heart.id).appendChild(span_likes);

	const heart = document.createElement('i');
	heart.className = 'fas fa-heart heart';
	document.getElementById(div_heart.id).appendChild(heart);
	//}
};

const create_footer = myfooter => {
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

	const footer_span = document.createElement('span');
	footer_span.innerHTML = total;
	document.querySelector('.footer_div').appendChild(footer_span);

	const footer_heart = document.createElement('i');
	footer_heart.className = 'fas fa-heart footer_heart';
	document.querySelector('.footer_div').appendChild(footer_heart);

	const footer_price = document.createElement('p');
	footer_price.classList.add('photographer_price');
	footer_price.innerHTML = myfooter.price + '€/jour';
	document.querySelector('.footer_section').appendChild(footer_price);
};
