import Page from '@/components/Page';
import ProductCard from '@/components/ProductCard';
import {getProducts} from '@/lib/products';

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
			<Page title="Indoor Plants">
				<ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
					{products.map(product => (
						<li key={product.id}>
							<ProductCard product={product}/>
						</li>
					))}
				</ul>
			</Page>
		</>
	);
}
