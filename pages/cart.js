import CartTable from '@/components/CartTable';
import Page from '@/components/Page';
import { useCart } from '@/hooks/cart';

function Cart() {
	const cart = useCart();
	return (
		<Page title="Cart">
			{cart && <CartTable cart={cart}/>}
		</Page>
	);
}

export default Cart;