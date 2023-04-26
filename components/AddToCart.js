import { useState } from 'react';
import Button from './Button';
import { useAddToCart } from '@/hooks/cart';
import { useRouter } from 'next/router';

function AddToCart({ productId }) {
	const [quantity, setQuantity] = useState(1);
	const { addToCart, cartLoading } = useAddToCart();
	const router = useRouter();
  
	const onChange = (event) => {
		setQuantity(parseInt(event.target.value));
	};

	const handleClick = async () => {
		await addToCart(productId, quantity);
		router.push('/cart');
	};

	return (
		<>
			<input 
				type="number"
				min={1}
				className='border px-3 py-1 rounded text-right w-16 mr-2'
				value={quantity}
				onChange={onChange} />
			{cartLoading ? (
				<span>Cart is loading...</span>
			): (
				<Button onClick={handleClick}>
					Add to Cart
				</Button>
			)}
		</>
	);
}

export default AddToCart;