function Button({ type, children, onClick }) {
	return (
		<button 
			type={type} 
			className="bg-green-800 my-2 px-4 py-2 text-gray-100 rounded hover:bg-green-700"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
