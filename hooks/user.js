import { fetchJson } from '@/lib/api';
import { useQuery, useMutation, useQueryClient } from 'react-query';

export function useSignIn() {
	const queryClient = useQueryClient();
	const mutation = useMutation(({email, password}) => fetchJson(
		'/api/login',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		}
	));
	return {
		signIn: async (email, password) => {
			try {
				const user = await mutation.mutateAsync({email, password});
				queryClient.setQueryData('user', user);
				return true;
			} catch (error) {
				return false;
			}
		},
		signInError: mutation.isError,
		signInLoading: mutation.isLoading,
	};
}

export function useUser() {
	const query = useQuery('user', async () => {
		try {
			return await fetchJson('/api/user');
		} catch (error) {
			return undefined;			
		}
	}, {
		staleTime: 30_000,
		cacheTime: Infinity,
	});
	
	return query.data;
}