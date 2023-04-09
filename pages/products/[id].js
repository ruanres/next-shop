import Title from "@/components/Title";
import { getProduct, getProducts } from "@/lib/products";
import Head from "next/head";

export async function getStaticProps(context) {
	const { id } = context.params;
	try {
		const product = await getProduct(id);
		return {
			props: {
				product,
			},
			revalidate: 5 * 60,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}

}

export async function getStaticPaths() {
	const products = await getProducts();
	const paths = products.map(p => ({ params: { id: p.id.toString() } }));
	return {
		paths,
		fallback: "blocking",
	};
}


function ProductPage({product}) {
	return (
		<>
			<Head>
				<title>Product</title>
			</Head>
			<main className="px-6 py-4">
				<Title>{product.title}</Title>
				<p>{product.description}</p>
			</main>
		</>
	);
}

export default ProductPage;
