const photographer_fetch_id = new URLSearchParams(
	document.location.search.substring(1),
);
const identifier = photographer_fetch_id.get('id');

function launchFilterLikes() {
	let mediasForLightboxFilter = mediasForLightbox.sort(function (a, b) {
		return b.likes - a.likes;
	});
	console.log(mediasForLightboxFilter);

	document.getElementById('id_gallery').innerHTML = '';

	mymedias = mediasForLightboxFilter;
	for (mymedia of mymedias) {
		create_article_img(mymedia);
	}
	FilterType = 'Popularité';
}

function launchFilterDate() {
	let mediasForLightboxFilter = mediasForLightbox.sort(function (a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	console.log(mediasForLightboxFilter);

	document.getElementById('id_gallery').innerHTML = '';

	mymedias = mediasForLightboxFilter;
	for (mymedia of mymedias) {
		create_article_img(mymedia);
	}

	FilterType = 'Date';
}

function launchFilterTitle() {
	let mediasForLightboxFilter = mediasForLightbox.sort(function (a, b) {
		return a.title.localeCompare(b.title);
	});

	console.log(mediasForLightboxFilter);

	document.getElementById('id_gallery').innerHTML = '';

	mymedias = mediasForLightboxFilter;
	for (mymedia of mymedias) {
		create_article_img(mymedia);
	}
	FilterType = 'Titre';
}

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
let infosForModal = [];
let FilterType = 'Popularité';

const displayMedia = media => {
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
};

const footerInfo = photographer => {
	let photographerInfo = {
		id: photographer.id,
		price: photographer.price + '€ / jour',
	};
};

// API REQUEST
const getPhotographersInfo = async id => {
	const response = await fetch('./data/photographers.json');
	const data = await response.json();

	let myphotographer = data.photographers.find(photographer => {
		return photographer.id == id;
	});

	create_article(myphotographer);

	infosForModal = myphotographer;

	let mymedias = data.medias.filter(media => {
		return media.photographerId == id;
	});

	mediasForLightbox = mymedias;
	console.log(mymedias);

	for (mymedia of mymedias) {
		create_article_img(mymedia);
	}

	create_footer(myphotographer);
};

getPhotographersInfo(identifier);

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
	name.tabIndex = '2';
	name.ariaLabel = myphotographer.name;
	document.querySelector('div').appendChild(name);

	const localization = document.createElement('p');
	localization.classList.add('photographer_localization');
	localization.innerHTML =
		myphotographer.city + ', ' + myphotographer.country;
	localization.tabIndex = '3';
	localization.ariaLabel = myphotographer.country;
	document.querySelector('div').appendChild(localization);

	const tagline = document.createElement('p');
	tagline.classList.add('photographer_tagline');
	tagline.innerHTML = myphotographer.tagline;
	tagline.tabIndex = '4';
	tagline.ariaLabel = myphotographer.tagline;
	document.querySelector('div').appendChild(tagline);

	const btn = document.createElement('button');
	btn.classList.add('contact_button');
	btn.addEventListener('click', launchModal);
	btn.innerHTML = 'Contactez-moi';
	btn.tabIndex = '5';
	btn.setAttribute('aria-label', 'Contactez-moi');
	document.querySelector('article').appendChild(btn);

	const img = document.createElement('img');
	img.classList.add('photographer-img');
	img.src = './assets/photographers/' + myphotographer.portrait;
	img.tabIndex = '6';
	img.setAttribute('alt', myphotographer.name);
	document.querySelector('article').appendChild(img);

	const section = document.createElement('section');
	section.classList.add('photographer_picture');
	document.querySelector('main').appendChild(section);

	const label = document.createElement('label');
	label.htmlFor = 'ListMenu';
	label.classList.add('label');
	label.innerHTML = 'Trier par';
	label.tabIndex = '7';
	label.ariaLabel = 'Trier par';
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
	input1.value = FilterType;
	input1.arialabel = 'select1';
	input1.tabIndex = '8';
	input1.setAttribute('aria-label', FilterType);
	document.querySelector('.css-select').appendChild(input1);

	document.addEventListener('click', function (event) {
		input1.value = FilterType;
	});

	const divButton = document.createElement('div');
	divButton.classList.add('css-select__dropdown');
	document.querySelector('.css-select').appendChild(divButton);

	const buttonSelect = document.createElement('button');
	buttonSelect.type = 'button';
	buttonSelect.classList.add('css-select__option');
	buttonSelect.innerHTML = 'Popularité';
	buttonSelect.tabIndex = '9';
	buttonSelect.setAttribute('aria-label', 'Popularité');
	buttonSelect.addEventListener('click', launchFilterLikes);
	document.querySelector('.css-select__dropdown').appendChild(buttonSelect);

	const buttonSelect1 = document.createElement('button');
	buttonSelect1.type = 'button';
	buttonSelect1.classList.add('css-select__option');
	buttonSelect1.innerHTML = 'Date';
	buttonSelect1.tabIndex = '10';
	buttonSelect1.setAttribute('aria-label', 'Date');
	buttonSelect1.addEventListener('click', launchFilterDate);
	document.querySelector('.css-select__dropdown').appendChild(buttonSelect1);

	const buttonOption = document.createElement('button');
	buttonOption.type = 'button';
	buttonOption.classList.add('css-select__option1');
	buttonOption.innerHTML = 'Titre';
	buttonOption.tabIndex = '11';
	buttonOption.setAttribute('aria-label', 'Titre');
	buttonOption.arialabel = 'Titre';
	buttonOption.addEventListener('click', launchFilterTitle);
	document.querySelector('.css-select__dropdown').appendChild(buttonOption);

	const div_gallery = document.createElement('div');
	div_gallery.id = 'id_gallery';
	div_gallery.classList.add('photographer_gallery');
	document.querySelector('main').appendChild(div_gallery);
};

const create_article_img = mymedias => {
	const div_figure = document.createElement('div');
	div_figure.classList.add('div_figure');
	div_figure.id = mymedias.id + '_figure';
	document.querySelector('.photographer_gallery').appendChild(div_figure);

	const figure = document.createElement('figure');
	figure.classList.add('photographer_gallery_picture');
	figure.id = mymedias.id;
	figure.tabIndex = '-1';
	document.getElementById(mymedias.id + '_figure').appendChild(figure);

	if (mymedias.image) {
		const img_gallery = document.createElement('img');
		img_gallery.classList.add('photographer_gallery_img');
		img_gallery.src = './assets/images/' + mymedias.image;
		img_gallery.setAttribute('alt', mymedias.title);
		img_gallery.dataset.id = mymedias.id;
		img_gallery.tabIndex = '12';
		img_gallery.ariaLabel = mymedias.title;
		img_gallery.addEventListener('click', e => launchModalImg(e));
		img_gallery.addEventListener('keydown', e => {
			if (e.key == 'Enter') {
				launchModalImg(e);
			}
		});
		document.getElementById(mymedias.id).appendChild(img_gallery);
	} else {
		const video_gallery = document.createElement('video');
		video_gallery.classList.add('photographer_gallery_img');
		video_gallery.src = './assets/images/' + mymedias.video;
		video_gallery.setAttribute('alt', mymedias.title);
		video_gallery.dataset.id = mymedias.id;
		video_gallery.tabIndex = '12';
		video_gallery.ariaLabel = mymedias.title;
		video_gallery.addEventListener('click', e => launchModalImg(e));
		video_gallery.addEventListener('keydown', e => {
			if (e.key == 'Enter') {
				launchModalImg(e);
			}
		});
		document.getElementById(mymedias.id).appendChild(video_gallery);
	}

	const div_footer = document.createElement('figcaption');
	div_footer.classList.add('photographer_gallery_footer');
	div_footer.id = mymedias.id + '_footer';
	document.getElementById(mymedias.id).appendChild(div_footer);

	const text = document.createElement('p');
	text.classList.add('photographer_gallery_footer_text');
	text.innerHTML = mymedias.title;
	text.id = 'filterTitle';
	text.tabIndex = '12';
	text.ariaLabel = mymedias.title;
	document.getElementById(div_footer.id).appendChild(text);

	const div_heart = document.createElement('div');
	div_heart.classList.add('photographer_gallery_footer_heart');
	div_heart.id = mymedias.id + '_heart';
	div_heart.setAttribute('liked', false);
	document.getElementById(div_footer.id).appendChild(div_heart);

	const span_likes = document.createElement('span');
	span_likes.id = 'likes';
	span_likes.classList.add('likes');
	span_likes.innerHTML = mymedias.likes;
	span_likes.tabIndex = '12';
	span_likes.ariaLabel = mymedias.likes;
	document.getElementById(div_heart.id).appendChild(span_likes);

	const heart = document.createElement('i');
	heart.className = 'far fa-heart heart';
	heart.addEventListener('click', addLikes);
	heart.tabIndex = '12';
	heart.ariaLabel = 'coeur';
	document.getElementById(div_heart.id).appendChild(heart);

	function addLikes() {
		let addRate = span_likes.innerHTML;

		if (div_heart.getAttribute('liked') == 'true') {
			heart.classList.add('far');
			heart.classList.remove('fas');
			heart.ariaLabel = 'aime pas';
			div_heart.setAttribute('liked', false);
			addRate = span_likes.innerHTML--;
		} else if (div_heart.getAttribute('liked') == 'false') {
			heart.classList.add('fas');
			heart.classList.remove('far');
			heart.ariaLabel = 'aime';
			div_heart.setAttribute('liked', true);
			addRate = span_likes.innerHTML++;
		}
	}
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
	footer_span.classList.add('span');
	footer_span.tabIndex = '13';
	footer_span.ariaLabel = total;
	document.querySelector('.footer_div').appendChild(footer_span);

	document.addEventListener('click', function (event) {
		const total_likes2 = document.querySelectorAll('.likes');
		var total2 = 0;
		Array.from(total_likes2).forEach((Element, index) => {
			total2 += parseInt(Element.innerHTML);
		});
		footer_span.innerHTML = total2;
	});

	const footer_heart = document.createElement('i');
	footer_heart.className = 'fas fa-heart footer_heart';
	document.querySelector('.footer_div').appendChild(footer_heart);

	const footer_price = document.createElement('p');
	footer_price.classList.add('photographer_price');
	footer_price.innerHTML = myfooter.price + '€/jour';
	footer_price.tabIndex = '14';
	footer_price.ariaLabel = myfooter.price + '€/jour';
	document.querySelector('.footer_section').appendChild(footer_price);
};
