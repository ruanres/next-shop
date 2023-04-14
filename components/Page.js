import Head from 'next/head';
import Title from '@/components/Title';

export default function Page({ title, children }) {
	return (
		<>
			<Head>
				<title>{title} - Next Shop</title>
			</Head>
			<main className="p-5">
				<Title>{title}</Title>
				{children}
			</main>
		</>
	);
}

