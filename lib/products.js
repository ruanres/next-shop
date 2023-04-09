import { fetchJson } from './api';

function stripProduct(product) {
	const { id, title, description } = product;
	return {
		id, 
		title,
		description,
	};
}


const PRODUCTS_URL = `${process.env.CMS_URL}/products`;

export async function getProducts() {
	const products = await fetchJson(PRODUCTS_URL);
	return products.map(stripProduct);
}

export async function getProduct(id) {
	const product = await fetchJson(`${PRODUCTS_URL}/${id}`);
	return stripProduct(product);
}