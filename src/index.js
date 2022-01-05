const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');
const mountNode = document.getElementById('js-mount');

const formatPrice = (price) =>
	new Intl.NumberFormat('en-EN', {
		style: 'currency',
		currency: 'USD',
	}).format(price);

async function fetchData() {
	const response = await fetch(`${baseUrl}/api/avo`);
	const { data: allAvos } = await response.json();

	const nodeArray = allAvos.map((avocado) => {
		const image = document.createElement('img');
		const title = document.createElement('h2');
		const price = document.createElement('div');
		const priceAndTitle = document.createElement('div');
		const card = document.createElement('div');

		image.src = `${baseUrl}${avocado.image}`;
		title.textContent = avocado.name;
		price.textContent = formatPrice(avocado.price);

		image.className =
			'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6';
		title.className = 'text-lg';
		price.className = 'text-gray-600';
		priceAndTitle.className = 'text-center md:text-left';
		card.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300';

		priceAndTitle.append(title, price);
		card.append(image, priceAndTitle);

		return card;
	});
	console.log(nodeArray);
	appNode.append(...nodeArray);
}

fetchData();
