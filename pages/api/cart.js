import { fetchJson } from '@/lib/api';

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

function formatCartItems(cartItems) {
	const items = cartItems.map(stripCartItem);
	const cartTotal = items.reduce((sum, item) => sum + item.total, 0);
	return {
		items,
		total: cartTotal,
	};
}


async function handleGetCart(req, res) {
	const { jwt } = req.cookies;
	if (!jwt) {
		res.status(401).end();
		return;
	} 
	try {
		const cartItems = await fetchJson(`${process.env.CMS_URL}/cart-items`, {
			headers: { 'Authorization': `Bearer ${jwt}` },
		});
		res.status(200).json(formatCartItems(cartItems));
	} catch (error) {
		res.status(401).end();
	}
}

async function handlePostCart(req, res) {
	const { jwt } = req.cookies;
	if (!jwt) {
		res.status(401).end();
		return;
	} 
	const { productId, quantity } = req.body;
	try {
		await fetchJson(`${process.env.CMS_URL}/cart-items`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${jwt}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ product: productId, quantity })
		});
		res.status(200).json({});
	} catch (error) {
		res.status(401).end();
	}
}

async function handleCart(req, res) {
	switch(req.method) {
	case 'GET':
		return handleGetCart(req, res);
	case 'POST':
		return handlePostCart(req, res);
	default:
		res.status(405).end();
	}
}

export default handleCart;
