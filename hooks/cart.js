import { fetchJson } from '@/lib/api';
import { useMutation, useQuery } from 'react-query';

const CART_QUERY_KEY = 'cartItems';

export function useCart() {
	const query = useQuery(CART_QUERY_KEY, async () => {
		try {
			return await fetchJson('/api/cart');
		} catch (error) {
			return undefined;			
		}
	});

	return query.data;
}

export function useAddToCart() {
	const mutation = useMutation(async ({ productId, quantity }) => fetchJson('/api/cart', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ productId, quantity })
	}) );

	return {
		addToCart: async function(productId, quantity) {
			try {
				await mutation.mutateAsync({ productId, quantity });
			} catch (error) {
				// do something
			}
		},
		cartError: mutation.isError,
		cartLoading: mutation.isLoading,
	};
}