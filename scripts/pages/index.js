const displayPhotographer = photographer => {
	console.log(photographer);
	let photographerObjects = {
		link: photographer.id,
		img: 'assets/photographers/' + photographer.portrait,
		name: photographer.name,
		id: photographer.id,
		localization: photographer.city + ', ' + photographer.country,
		tagline: photographer.tagline,
		price: photographer.price + '€/jour',
	};

	create_article(photographerObjects);
};

// API REQUEST
const getPhotographers = async () => {
	const response = await fetch('./data/photographers.json');

	const data = await response.json();
	// console.log(data);
	data.photographers.map(photographer => displayPhotographer(photographer));
};

getPhotographers();

// INSERT ELEMENT IN HTML
function create_article(photographerObjects) {
	const article = document.createElement('article');
	article.setAttribute('id', photographerObjects.id);
	article.setAttribute('id', photographerObjects.link);
	article.classList.add('photographer_id');
	document.querySelector('main').appendChild(article);

	const link = document.createElement('a');
	link.classList.add('photographer_link');
	link.href = 'photographer.html?id=' + photographerObjects.id;
	link.setAttribute('aria-label', photographerObjects.name);
	link.tabIndex = '3';
	document.getElementById(photographerObjects.id).appendChild(link);

	const img = document.createElement('img');
	img.classList.add('photographer_img');
	img.src = photographerObjects.img;
	img.setAttribute('alt', photographerObjects.name);
	document
		.getElementById(photographerObjects.id)
		.querySelector('a')
		.appendChild(img);

	const name = document.createElement('h2');
	name.classList.add('photographer_name');
	name.innerHTML = photographerObjects.name;
	name.setAttribute('aria-label', photographerObjects.name);
	document
		.getElementById(photographerObjects.id)
		.querySelector('a')
		.appendChild(name);

	const localization = document.createElement('p');
	localization.classList.add('photographer_localization');
	localization.innerHTML = photographerObjects.localization;
	localization.setAttribute('aria-label', photographerObjects.localization);
	localization.tabIndex = '3';
	document.getElementById(photographerObjects.id).appendChild(localization);

	const tagline = document.createElement('p');
	tagline.classList.add('photographer_tagline');
	tagline.innerHTML = photographerObjects.tagline;
	tagline.setAttribute('aria-label', photographerObjects.tagline);
	tagline.tabIndex = '3';
	document.getElementById(photographerObjects.id).appendChild(tagline);

	const price = document.createElement('p');
	price.classList.add('photographer_price');
	price.innerHTML = photographerObjects.price;
	price.setAttribute('aria-label', photographerObjects.price);
	price.tabIndex = '3';
	document.getElementById(photographerObjects.id).appendChild(price);
}
