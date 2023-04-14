function Input({ type, value, onChange, required }) {
	return (
		<input 
			type={type} 
			value={value} 
			onChange={onChange}
			required={required}
			className='border px-3 py-1 w-80 rounded'
		/>
	);
}

export default Input;