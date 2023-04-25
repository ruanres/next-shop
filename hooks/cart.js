import { fetchJson } from '@/lib/api';
import { useQuery } from 'react-query';

export function useCart() {
	const query = useQuery('cartItems', async () => {
		try {
			return await fetchJson('/api/cart');
		} catch (error) {
			return undefined;			
		}
	}, {
		staleTime: 30_000,
		// cacheTime: Infinity,
	});

	return query.data;
}