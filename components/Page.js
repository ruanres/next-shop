import Head from 'next/head';
import Title from '@/components/Title';
import Navbar from './Navbar';

export default function Page({ title, children }) {
	return (
		<>
			<Head>
				<title>{title} - Next Shop</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className="p-5">
				<Title>{title}</Title>
				{children}
			</main>
		</>
	);
}

