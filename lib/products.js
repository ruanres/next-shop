import { fetchJson } from './api';

const { CMS_URL } = process.env;

function stripProduct(product) {
	const { id, title, description, price } = product;
	return {
		id, 
		title,
		description,
		price,
		pictureUrl: CMS_URL + product.picture.url,
	};
}


const PRODUCTS_URL = `${CMS_URL}/products`;

export async function getProducts() {
	const products = await fetchJson(PRODUCTS_URL);
	return products.map(stripProduct);
}

export async function getProduct(id) {
	const product = await fetchJson(`${PRODUCTS_URL}/${id}`);
	return stripProduct(product);
}