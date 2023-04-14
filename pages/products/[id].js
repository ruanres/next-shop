import Page from '@/components/Page';
import { ApiError } from '@/lib/api';
import { getProduct, getProducts } from '@/lib/products';
import Image from 'next/image';

const { REVALIDATE_SECONDS } = process.env;

export async function getStaticProps(context) {
	const { id } = context.params;
	try {
		const product = await getProduct(id);
		return {
			props: {
				product,
			},
			revalidate: parseInt(REVALIDATE_SECONDS),
		};
	} catch (error) {
		if(error instanceof ApiError && error.status === 404) {
			return {
				notFound: true,
			};
		}
		
		throw error;
	}

}

export async function getStaticPaths() {
	const products = await getProducts();
	const paths = products.map(p => ({ params: { id: p.id.toString() } }));
	return {
		paths,
		fallback: 'blocking',
	};
}


function ProductPage({product}) {
	return (
		<>
			<Page title={product.title}>
				<div className='flex gap-4 flex-col md:flex-row'>
					<Image src={product.pictureUrl} alt={product.title} width={640} height={480} />
					<div>
						<p className='text-sm'>{product.description}</p>
						<p className='text-lg font-bold'>${product.price}</p>
					</div>
				</div>
			</Page>
		</>
	);
}

export default ProductPage;
