import Link from 'next/link';
import Image from 'next/image';

function ProductCard({product}) {
	return (
		<div className='border w-80 shadow hover:shadow-xl'>
			<Link href={`products/${product.id}`}>
				<Image src={product.pictureUrl} alt={product.title} width={320} height={240}/>
				<div className='p-2 flex justify-between'>
					<h2 className='text-lg font-bold items-baseline'>
						{product.title}
					</h2>
					<span>${product.price}</span>
				</div>
			</Link>
		</div>
	);
}

export default ProductCard;
