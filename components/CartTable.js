function formatPrice(price) {
	return `$${price.toFixed(2)}`;
}

function CartTable({ cart }) {
	return (
		<table>
			<thead>
				<tr>
					<th className='px-4 py-2 text-left'>Product</th>
					<th className='px-4 py-2 text-left'>Price</th>
					<th className='px-4 py-2'>Quantity</th>
					<th className='px-4 py-2 font-bold'>Total</th>
				</tr>
			</thead>
			<tbody>
				{cart.items.map(({ id, product, quantity, total }) => (
					<tr key={id}>
						<td className='px-4 py-2'>{product.title}</td>
						<td className='px-4 py-2 text-left'>{formatPrice(product.price)}</td>
						<td className='px-4 py-2 text-center'>{quantity}</td>
						<td className='px-4 py-2 text-center'>{formatPrice(total)}</td>
					</tr>
				))}
				<tr>
					<td className='px-4 py-2 text-left font-bold'>Total</td>
					<td className='px-4 py-2 text-right font-bold text-red-500' colspan="3">
						{formatPrice(cart.total)}
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default CartTable;
