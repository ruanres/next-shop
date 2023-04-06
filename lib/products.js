
function stripProduct(product) {
	const {id, title} = product;
	return {id, title};
}
export async function getProducts() {
	const products = await fetch("http://localhost:1337/products")
		.then(data => data.json());
	return products.map(stripProduct);
}