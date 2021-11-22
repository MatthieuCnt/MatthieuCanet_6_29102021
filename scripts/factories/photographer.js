function photographerFactory(data) {
	const { name, portrait, city, country, tagline, price } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement('article');
		const img = document.createElement('img');
		img.setAttribute('src', picture);
		const h2 = document.createElement('h2');
		h2.textContent = name;
		const h1 = document.createElement('h1');
		h1.textContent = city.concat(', ', country);
		const p = document.createElement('p');
		p.textContent = tagline;
		const div = document.createElement('div');
		div.textContent = price + '€/jour';
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(h1);
		article.appendChild(p);
		article.appendChild(div);
		return article;
	}
	return { name, picture, getUserCardDOM };
}
