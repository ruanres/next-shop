
function stripProduct(product) {
	const { id, title, description } = product;
	return {
		id, 
		title,
		description,
	};
}

const PRODUCTS_URL = "http://localhost:1337/products";
export async function getProducts() {
	const products = await fetch(PRODUCTS_URL)
		.then(data => data.json());
	return products.map(stripProduct);
}

export async function getProduct(id) {
	const product = await fetch(`${PRODUCTS_URL}/${id}`).then(data => data.json());
	return stripProduct(product);
}