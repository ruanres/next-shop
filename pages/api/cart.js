import { fetchJson } from '@/lib/api';

const { CMS_URL } = process.env;

function stripCartItem(item) {
	const { id, product, quantity } = item;
	return {
		id,
		quantity,
		total: quantity * product.price,
		product: {
			id: product.id,
			title: product.title,
			price: product.price
		},
	};
}


async function handleCart(req, res) {
	const { jwt } = req.cookies;
	if (!jwt) {
		res.status(401).end();
		return;
	} 
	try {
		const cartItems = await fetchJson(`${CMS_URL}/cart-items`, {
			headers: { 'Authorization': `Bearer ${jwt}` },
		});
		const items = cartItems.map(stripCartItem);
		const cartTotal = items.reduce((sum, item) => sum + item.total, 0);
		res.status(200).json({
			items,
			total: cartTotal,
		});
	} catch (error) {
		res.status(401).end();
	}
}

export default handleCart;
