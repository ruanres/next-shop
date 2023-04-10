import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import {getProducts} from '@/lib/products';
import Head from 'next/head';
import Link from 'next/link';

const { REVALIDATE_SECONDS } = process.env;

export async function getStaticProps() {
	const products = await getProducts();
	return {
		props: {
			products
		},
		revalidate: parseInt(REVALIDATE_SECONDS),
	};
}

export default function Home({products}) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<main className="p-5">
				<Title>Next Shop</Title>
				<ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
					{products.map(product => (
						<li key={product.id}>
							<ProductCard product={product}/>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
