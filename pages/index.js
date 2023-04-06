import {getProducts} from "@/lib/products";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
	console.log("[getStaticProps]");
	const products = await getProducts();
	return {
		props: {
			products
		},
		revalidate: 5 * 60
	};
}

export default function Home({products}) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>
			<main className="p-5">
				<h1 className="font-bold">Next Shop</h1>
				<ul>
					{products.map(product => (
						<li key={product.id}>
							<Link href={`products/${product.id}`}>
								{product.title}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
}
