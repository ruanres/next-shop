function Field({label, children}) {
	return (
		<label className='block my-4'>
			<span className='block tx-sm text-gray-600'>
				{label}
			</span>
			{children}
		</label>
	);
}

export default Field;