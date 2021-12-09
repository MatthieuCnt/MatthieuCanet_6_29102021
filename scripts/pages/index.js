/*async function getPhotographers() {
	//API REQUEST

	const fetchphotographers = async () => {
		photographers = await fetch(
			'https://raw.githubusercontent.com/MatthieuCnt/MatthieuCanet_6_29102021/master/data/photographers.json',
		).then(response => {
			console.log(response.json());
		});
	};
	fetchphotographers();
}
*/

const displayPhotographer = photographer => {
	console.log(photographer);
};
/*
async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

*/

const getPhotographers = async () => {
	const response = await fetch('./data/photographers.json');
	const data = await response.json();
	data.photographers.map(photographer => displayPhotographer(photographer));
};

getPhotographers();
